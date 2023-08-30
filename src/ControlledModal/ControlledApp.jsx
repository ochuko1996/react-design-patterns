import React, {useState} from 'react'
import { ControlledModal } from './ControlledModal'
function ControlledApp() {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
        <ControlledModal
            showModal={showModal}
            onRequestClose={()=> setShowModal(false)}
            >
            <h1>hello</h1>
        </ControlledModal>
        <button onClick={() => setShowModal(!showModal)}>
            {showModal ? 'Hide Modal' : 'Show Modal'}
        </button>
    </>
  )
}

export default ControlledApp