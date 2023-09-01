import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { baseUrl } from './HOCApp'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
function withEditableResource(Component, resoursePath, resourceName) {
  return props => {
    const [orignalData, setOrignalData] = useState(null)
    const [data, setData] = useState(null)

    useEffect(()=>{
        (async ()=> {
            const response = await axios.get(resoursePath)
            setOrignalData(response.data)
            setData(response.data)
        })()
    },[])
    const onChange = changes => {
        setData({...data, ...changes});
    }
    
    const onSave = async () => {
        const response = await axios.post(resoursePath, {[resourceName]: data})
        setOrignalData(response.data)
        setData(response.data)
    }

    const onReset = () => {
        setData(orignalData)
    }

    const resourceProps = {
        [resourceName]: data,
        [`onChange${capitalize(resourceName)}`]: onChange,
        [`onReset${capitalize(resourceName)}`]: onReset,
        [`onSave${capitalize(resourceName)}`]: onSave
    }
    return <Component 
        {...props} 
        {...resourceProps}
    />
  }
}

export default withEditableResource