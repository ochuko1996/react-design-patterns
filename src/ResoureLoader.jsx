import React, { useState, useEffect }  from "react";


function ResourceLoader({resourceUrl, resourceName, children}) {
    const [state, setState] = useState(null)
    useEffect(()=>{
        (async ()=> {
            // use whatever fetching api. e.g fetch api or axios 
           const response = await axios.get('/endpoint') 
           setState(response.data)
        })()
    },[resourceUrl])
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

export default ResourceLoader