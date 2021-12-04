import React from 'react'
import {
  CCard,
  CCardFooter,
  CHeaderBrand,
  CContainer,
  CCarousel,
  CCarouselItem,
  CCardBody,
  CRow,
  CCol,
  CListGroupItem,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import EditFruitSuggestion from './EditFruitSuggestion'
import './SuggestionDetails.css'

const SuggestionDetails = (props) => {
  let item = props.fruitItem
  let userGroups = props.userGroups
  let user = props.user
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler

  return (
    <CContainer>
      <CCard className="text-center">
        <CHeaderBrand>
          <h1 className="display-1">{item.name}</h1>
        </CHeaderBrand>
        <div className="clearfix">
          <CCarousel controls indicators dark>
            {printCarousel()}
          </CCarousel>
        </div>
        <CCardBody>
          <CRow className="align-items-center">
            <CCol />
            <CCol>
              <CListGroupItem>
                {' '}
                <h5>Fruit Details:</h5>
                {item.details}
              </CListGroupItem>
            </CCol>
            <CCol />
          </CRow>
          <p></p>
        </CCardBody>
        <CCardFooter className="text-lg-emphasis">
          {' '}
          <EditFruitSuggestion
            fruitItem={item}
            userGroups={userGroups}
            user={user}
            removeFruitHandler={removeFruitHandler}
            addFruitHandler={addFruitHandler}
          />
        </CCardFooter>
      </CCard>
    </CContainer>
  )

  function printCarousel() {
    return item.images.map((el, idx) => {
      return (
        <CCarouselItem key={idx}>
          <AmplifyS3Image orientation="top" level={'public'} imgKey={el} />
        </CCarouselItem>
      )
    })
  }
}

SuggestionDetails.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}

export default SuggestionDetails
