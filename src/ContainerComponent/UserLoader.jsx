import React, { useState, useEffect }  from "react";
import axios from "axios";

function UserLoader({userId, children}) {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        (async ()=> {
            // use whatever fetching api. e.g fetch api or axios 
           const response = await axios.get(`http://localhost:8080/users/${userId}`) 
           setUser(response.data)
        })()
    },[userId])
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