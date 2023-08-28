import React from 'react'
import DataSource from './DataSource';

function GetLocalStorage() {
    const getLocalStorageData = (key)=>{
        return localStorage.getItem(key);
    }
    const Text = ({message})=> <h1>{message}</h1>
  return (
    <DataSource getDataFunc={getLocalStorageData('message')} resourceName={"message"}>
        <Text />
    </DataSource>
  )
}

export default GetLocalStorage