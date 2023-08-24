import React, {useState} from 'react'

function UnControlledOnboardingFlow({children, onFinish}) {
    const [onboardingData, setOnboardingData] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentChild = React.Children.toArray(children)[currentIndex] 
  return (
    <>
        {currentChild}
    </>
    )
}

export default UnControlledOnboardingFlow