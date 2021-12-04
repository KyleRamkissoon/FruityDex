import React, { useState } from 'react'
import {
  CAlert,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import FruitSuggestionForm from './FruitSuggestionForm'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilBurn } from '@coreui/icons'

const EditFruitSuggestion = (props) => {
  let item = props.fruitItem // item from fruit details comp
  let userGroups = props.userGroups
  let user = props.user
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler

  const [editModal, setEditModal] = useState(false) // toggle modal
  const [deleteConfirm, setDeleteConfirm] = useState(false) // toggle delete confirmation
  function closeModalHandler() {
    setEditModal(false)
    setDeleteConfirm(false)
  }

  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      {userGroups.includes('Admins') && (
        <CButton color={'success'} onClick={() => setEditModal(!editModal)}>
          Edit
        </CButton>
      )}
      {userGroups.includes('Admins') && (
        <CButton color={'danger'} onClick={() => setDeleteConfirm(!deleteConfirm)}>
          Delete
        </CButton>
      )}

      <CModal size={'lg'} visible={editModal} onClose={() => setEditModal(false)}>
        <CModalHeader onClose={() => setEditModal(false)}>
          <CModalTitle>Enter New Fruit Information</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FruitSuggestionForm
            fruitItem={item}
            type={'update'}
            user={user}
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
          <CAlert color="danger" className="d-flex align-items-center">
            <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
            <h4>
              Are you sure you wish to delete: <b>{item.name}</b> ?{' '}
              <CButton
                color={'danger'}
                onClick={() => {
                  setDeleteConfirm(false)
                  setEditModal(false)
                  removeFruitHandler(item)
                }}
              >
                Delete
              </CButton>
            </h4>
          </CAlert>
        </CModalBody>
      </CModal>
    </div>
  )
}

EditFruitSuggestion.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}

export default EditFruitSuggestion
