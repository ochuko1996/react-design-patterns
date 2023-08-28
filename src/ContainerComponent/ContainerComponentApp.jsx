import React from 'react'
import CurrentUserLoader from './CurrentUserLoader'
import { UserInfo } from './UserInfo'

export default function ContainerComponentApp() {
  return (
    <CurrentUserLoader>
        <UserInfo/>
    </CurrentUserLoader>
  )
}
