import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import FruitForm from './FruitForm'
import PropTypes from 'prop-types'

const EditFruit = (props) => {
  let item = props.fruitItem // item from fruit details comp
  let userGroups = props.userGroups
  let user = props.user
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler

  let showEdit = false //This shows the Edit and Delete Funcs for Both Admins and Members.
  //let showEdit = false makes it not show atall.
  if (userGroups.includes('Admins')) {
    showEdit = true
  } else if (user.attributes.email === item.createdBy && item.status === 'PENDING') {
    showEdit = true
  }

  const [editModal, setEditModal] = useState(false) // toggle modal
  const [deleteConfirm, setDeleteConfirm] = useState(false) // toggle delete confirmation
  function closeModalHandler() {
    setEditModal(false)
    setDeleteConfirm(false)
  }

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
      <p></p>
      {showEdit && (
        <CButton color={'success'} onClick={() => setEditModal(!editModal)}>
          Edit
        </CButton>
      )}
      {showEdit && (
        <CButton color={'danger'} onClick={() => setDeleteConfirm(!deleteConfirm)}>
          Delete
        </CButton>
      )}

      <CModal size={'lg'} visible={editModal} onClose={() => setEditModal(false)}>
        <CModalHeader onClose={() => setEditModal(false)}>
          <CModalTitle>Enter New Fruit Information</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FruitForm
            fruitItem={item}
            type={'update'}
            user={user}
            userGroups={userGroups}
            addFruitHandler={addFruitHandler}
            closeModalHandler={closeModalHandler}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setEditModal(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal size="lg" visible={deleteConfirm} onClose={() => setDeleteConfirm(false)}>
        <CModalHeader>
          <CModalTitle>Delete Fruit</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to remove this Fruit? <b>{item.name}</b> ?{' '}
        </CModalBody>
        <CModalFooter>
          <CButton
            color={'danger'}
            onClick={() => {
              closeModalHandler()
              removeFruitHandler(item)
            }}
          >
            Remove
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

EditFruit.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}

export default EditFruit
