import React, {useState} from 'react'

function UnControlledOnboardingFlow({children, onFinish}) {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentChild = React.Children.toArray(children)[currentIndex] 
    const goToNext = stepData => {
        const nextIndex = currentIndex + 1
        const updatedData = {
            ...onboardingData,
            ...stepData
        }
        setCurrentIndex(nextIndex)
    }
    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goToNext})
    }
  return currentChild
}
    

export default UnControlledOnboardingFlow