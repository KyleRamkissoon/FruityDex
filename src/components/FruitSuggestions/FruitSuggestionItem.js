import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTableDataCell,
  CTableRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import SuggestionDetails from './SuggestionDetails'

const FruitSuggestionItem = (props) => {
  let item = props.fruitItem
  let userGroups = props.userGroups
  let user = props.user
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler
  const [visible, setVisible] = useState(false) // toggle modal

  return (
    <CTableRow>
      <CTableDataCell>{item.createdBy}</CTableDataCell>
      <CTableDataCell>{item.name}</CTableDataCell>
      <CTableDataCell>{item.details}</CTableDataCell>
      <CTableDataCell>
        <CButton onClick={() => setVisible(!visible)} color="primary" size="sm">
          Details
        </CButton>
      </CTableDataCell>
      <CTableDataCell>{editModal()}</CTableDataCell>
    </CTableRow>
  )

  function editModal() {
    return (
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <CModal size={'xl'} visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>{item.name} Fruit Information</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <SuggestionDetails
              fruitItem={item}
              userGroups={userGroups}
              user={user}
              removeFruitHandler={removeFruitHandler}
              addFruitHandler={addFruitHandler}
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
  }
}

FruitSuggestionItem.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}

export default FruitSuggestionItem
