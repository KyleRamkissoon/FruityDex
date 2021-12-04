import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import FruitSuggestionForm from './FruitSuggestionForm'
import PropTypes from 'prop-types'

const AddFruitSuggestion = (props) => {
  let user = props.user
  let email = user.attributes.email
  let addFruitHandler = props.addFruitHandler
  const [visible, setVisible] = useState(false) // toggle modal

  // these keys need to match the keys in FruitsController.js
  let initialValues = {
    name: '',
    color: [],
    shape: '',
    weight: 0.0,
    details: '',
    location: '',
    aliases: '',
    status: 'PENDING',
    images: [],
    createdBy: email,
    lastUpdatedBy: email,
  }

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <CButton onClick={() => setVisible(!visible)}>Add Fruit Suggestion</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Enter New Fruit Information</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FruitSuggestionForm
            fruitItem={initialValues}
            type={'add'}
            user={user}
            addFruitHandler={addFruitHandler}
            closeModalHandler={closeModalHandler}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )

  // allow FruitForm to close the modal on this comp
  function closeModalHandler() {
    setVisible(false)
  }
}
AddFruitSuggestion.propTypes = {
  user: PropTypes.object.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}
export default AddFruitSuggestion
