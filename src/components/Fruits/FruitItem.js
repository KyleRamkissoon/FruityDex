import React, { useState } from 'react'
import './FruitItem.css'
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardText,
  CCardTitle,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import FruitDetails from './FruitDetails'
import LoadingButton from '../LoadingButton'

const FruitItem = (props) => {
  let item = props.fruitItem
  let userGroups = props.userGroups
  let user = props.user
  let userDetails = props.userDetails
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler
  let addFavHandler = props.addFavHandler
  let removeFavHandler = props.removeFavHandler
  const [visible, setVisible] = useState(false) // toggle modal

  return (
    <div>
      <CCol xs>
        <CCard className="h-100">
          <AmplifyS3Image orientation="top" level={'public'} imgKey={item.images[0]} />
          <CCardBody>
            <CCardTitle className="fs-2">{item.name}</CCardTitle>
            {userGroups.includes('Admins') && (
              <CCardText>
                Entry Status:{' '}
                {item.status === 'APPROVED' && <CBadge color="success">APPROVED</CBadge>}
                {item.status === 'PENDING' && <CBadge color="warning">PENDING</CBadge>}
              </CCardText>
            )}
            <CCardText>Aliases: {item.aliases}</CCardText>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <CButton onClick={() => setVisible(!visible)} color="primary" size="sm">
                Details
              </CButton>
              {userDetails.favouriteFruits.includes(item.id) ? (
                <CButton
                  onClick={() => {
                    removeFromFavs()
                  }}
                  color="danger"
                  size="sm"
                  type={'submit'}
                >
                  Remove Favorite
                </CButton>
              ) : (
                <LoadingButton
                  color="success"
                  size="sm"
                  handler={addToFavs}
                  text={'Add Favorite'}
                  timeout={6000}
                />
              )}
            </div>
          </CCardBody>
          <CCardFooter>
            <small className="text-medium-emphasis">
              Click View for more info or Add to Favorites
            </small>
          </CCardFooter>
        </CCard>
      </CCol>
      {editModal()}
    </div>
  )

  function addToFavs() {
    // debugger
    addFavHandler(item)
  }

  function removeFromFavs() {
    removeFavHandler(item)
  }

  function editModal() {
    return (
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <CModal size={'xl'} visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>{item.name} Fruit Information</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <FruitDetails
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

FruitItem.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
  addFavHandler: PropTypes.func.isRequired,
  removeFavHandler: PropTypes.func.isRequired,
}

export default FruitItem
