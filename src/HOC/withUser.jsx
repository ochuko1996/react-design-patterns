import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { baseUrl } from './HOCApp'

function withUser(Component, userId) {
  return props => {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(`${baseUrl}users/${userId}`)
            setUser(response.data)
        })()
    }, [])
    return <Component {...props} user={user} />
  }
}

export default withUser