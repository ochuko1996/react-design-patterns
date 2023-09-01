import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { baseUrl } from './HOCApp'

function withEditableUser(Component, userId) {
  return props => {
    const [orignalUser, setOrignalUser] = useState(null)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        (async ()=> {
            const response = await axios.get(`${baseUrl}users/${userId}`)
            setOrignalUser(response.data)
            setUser(response.data)
        })()
    },[])
    const onChangeUser = changes => {
        setUser({...user, ...changes});
    }
    
    const onSaveUser = async () => {
        const response = await axios.post(`${baseUrl}users/${userId}`, {user})
        setOrignalUser(response.data)
        setUser(response.data)
    }

    const onResetUser = () => {
        setUser(orignalUser)
    }
    return <Component 
        {...props} 
        user={user} 
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
    />
  }
}

export default withEditableUser