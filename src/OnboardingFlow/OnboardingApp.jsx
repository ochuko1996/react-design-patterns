import React, {useState} from 'react'
import UnControlledOnboardingFlow from './UnControlledOnboardingFlow'
import ControlledOnboardingFlow from './ControlledOnboardingFlow'

const StepOne = ({goToNext})=>{
 return (
    <>
        <h1>Step 1</h1>
        <button onClick={()=> goToNext({name: "ochuko george"})}>Next</button>
    </>
 )   
}
const StepTwo = ({goToNext})=>{
 return (
    <>
        <h1>Step 2</h1>
        <button onClick={()=> goToNext({skill: "Web Developer"})}>Next</button>
    </>
 )   
}
const StepThree = ({goToNext})=>{
 return (
    <>
        <h1>Step 3</h1>
        <button onClick={()=> goToNext({age: 27})}>Next</button>
    </>
 )   
}
function OnboardingApp() {
   const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
   
  const onNext = stepData => {
      const nextIndex = currentIndex + 1
      const updatedData = {
            ...onboardingData,
            ...stepData
        }
      console.log(updatedData);
      if (nextIndex < children.length) {
          setCurrentIndex(nextIndex)
      }else {
          onFinish(updatedData)
      }
        setOnboardingData(updatedData)
        // setOnboardingData({...onboardingData, ...stepData})
        setCurrentIndex(nextIndex)
        
    }
  return (
    // <UnControlledOnboardingFlow onFinish={data => {
    //   console.log(data);
    //   alert("Onboarding Completed!")
    // }}>
    //     <StepOne/>
    //     <StepTwo/>
    //     <StepThree/>
    // </UnControlledOnboardingFlow>
    <ControlledOnboardingFlow
      currentIndex={currentIndex}
      onNext={onNext}
    >
      <StepOne/>
      <StepTwo/>
      <StepThree/>
    </ControlledOnboardingFlow>
  )
}

export default OnboardingApp