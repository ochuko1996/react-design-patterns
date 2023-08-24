import React from 'react'
import UnControlledOnboardingFlow from './UnControlledOnboardingFlow'

const StepOne = ({goToNext})=>{
 return (
    <>
        <h1>Step 1</h1>
        <button onClick={goToNext}>Next</button>
    </>
 )   
}
const StepTwo = ({goToNext})=>{
 return (
    <>
        <h1>Step 2</h1>
        <button onClick={goToNext}>Next</button>
    </>
 )   
}
const StepThree = ({goToNext})=>{
 return (
    <>
        <h1>Step 3</h1>
        <button onClick={goToNext}>Next</button>
    </>
 )   
}
function OnboardingApp() {
  return (
    <UnControlledOnboardingFlow>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
    </UnControlledOnboardingFlow>
  )
}

export default OnboardingApp