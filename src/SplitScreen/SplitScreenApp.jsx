import React from 'react'
import { SplitScreen } from './SplitScreen'
const LeftHandComponent = ()=> {
    return <h1 style={{backgroundColor: 'green'}}>Left!</h1>
}
const RightHandComponent = ()=> {
    return <h1 style={{backgroundColor: 'red'}}>Right!</h1>
}
function SplitScreenApp() {
  return (
    <SplitScreen
        leftWeight={1}
        rightWeight={3}
    >
        <LeftHandComponent/>
        <RightHandComponent/>
    </SplitScreen>
  )
}

export default SplitScreenApp