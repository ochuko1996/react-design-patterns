import React from 'react'
import CurrentUserLoader from './CurrentUserLoader'
import { UserInfo } from './UserInfo'
import UserLoader from './UserLoader'
import ResourceLoader from './ResoureLoader'
import ProductInfo from './ProductInfo'
import DataSource from './DataSource'
import axios from 'axios'
const baseUrl = 'http://localhost:8080/'
const getServerData = url => async ()=> {
        const response = await axios.get(url)
        return response.data
      }
const getLocalStorageData = key => ()=>{
        return localStorage.getItem(key);
    }
const Text = ({persist})=> <h1>{persist}</h1>
export default function ContainerComponentApp() {
  return (
    <>
      {/* <CurrentUserLoader> */}
          {/* <UserInfo/> */}
      {/* </CurrentUserLoader> */}
      {/* <UserLoader userId={"234"}> */}
          {/* <UserInfo/> */}
      {/* </UserLoader> */}
      {/* <ResourceLoader resourceUrl={`${baseUrl}users/${"123"}`} resourceName={'user'}>
          <UserInfo/>
      </ResourceLoader>
      <ResourceLoader resourceUrl={`${baseUrl}products/${"123"}`} resourceName={'product'}>
          <ProductInfo/>
      </ResourceLoader> */}
      <DataSource getDataFunc={ getServerData(`${baseUrl}users/123`)}
      resourceName={'user'}      
      >
        <UserInfo/>
      </DataSource>
      <DataSource getDataFunc={getLocalStorageData('persist')} resourceName={"persist"}>
        <Text />
    </DataSource>
    </>
  )
}
