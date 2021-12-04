import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import FruitForm from './FruitForm'
import PropTypes from 'prop-types'

const AddFruit = (props) => {
  let user = props.user
  let userGroups = props.userGroups
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
    status: 'APPROVED',
    images: [],
    createdBy: email,
    lastUpdatedBy: email,
  }

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <CButton onClick={() => setVisible(!visible)}>Add Fruits</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Enter New Fruit Information</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FruitForm
            fruitItem={initialValues}
            type={'add'}
            user={user}
            userGroups={userGroups}
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

AddFruit.propTypes = {
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}
export default AddFruit
