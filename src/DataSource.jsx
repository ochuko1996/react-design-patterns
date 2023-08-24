import React, { useState, useEffect }  from "react";


function DataSource({getDataFunc = () => {}, resourceName, children}) {
    const [state, setState] = useState(null)
    useEffect(()=>{
        (async ()=> {
            // use whatever fetching api. e.g fetch api or axios 
           const data = await getDataFunc() 
           setState(data)
        })()
    },[getDataFunc])
  return (
    <>
        {
            React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {[resourceName]: state})
                }
                return child
            })
        }
    </>
  )
}

export default DataSource

// implementation of data on the said child component
const App = ()=>{
    return (
        <DataSource getDataFunc={ async ()=> {
            const response = await axios.get('/url')
            return response.data
        }}
        resourceName={"user"}>
            {/* <User/> */}
        </DataSource>
    )
}