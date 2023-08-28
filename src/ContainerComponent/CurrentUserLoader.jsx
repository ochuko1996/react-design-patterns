import React,{useState, useEffect} from 'react'
import axios from 'axios'

function CurrentUserLoader({children}) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        (async ()=>{
            const response = await axios.get('/current-user') 
            console.log(response);
            setUser(response.data)
        })()
    },[])
    
  return (
    <>
        {
            React.Children.map(children, child => {
                if(React.isValidElement(child)){
                    return React.cloneElement(child, { user })
                }
                return child
            })
        }
    </>
  )
}

export default CurrentUserLoader