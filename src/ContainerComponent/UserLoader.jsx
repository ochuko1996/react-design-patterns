import React, { useState, useEffect }  from "react";
import axios from "axios";

function UserLoader({children}) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        (async ()=> {
            // use whatever fetching api. e.g fetch api or axios 
           const response = await axios.get('/endpoint') 
           setUser(response.data)
        })()
    },[])
  return (
    <>
        {
            React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {user})
                }
                return child
            })
        }
    </>
  )
}

export default UserLoader