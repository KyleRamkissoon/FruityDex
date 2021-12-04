import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CHeaderBrand,
  CContainer,
  CCarousel,
  CCarouselItem,
  CListGroupItem,
  CRow,
  CCol,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { AmplifyS3Image } from '@aws-amplify/ui-react'
import EditFruit from './EditFruit'

const FruitDetails = (props) => {
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
          <CContainer>
            <CRow className="align-items-center">
              <CCol />
              <CCol>
                <CListGroupItem>
                  {' '}
                  <h5>Aliases/Other Names:</h5>
                  {item.aliases}
                </CListGroupItem>
              </CCol>
              <CCol />
            </CRow>
            <p></p>
            <CRow className="align-items-center">
              <CCol />
              <CCol>
                <CListGroupItem>
                  {' '}
                  <h5>Common Details:</h5>
                  {item.details}
                </CListGroupItem>
              </CCol>
              <CCol />
            </CRow>
            <p></p>
            <CRow className="align-items-center">
              <CCol />
              <CCol>
                <CListGroupItem>
                  {' '}
                  <h5>Color[s]:</h5>
                  {item.color}
                </CListGroupItem>
              </CCol>
              <CCol />
            </CRow>
            <p></p>
            <CRow className="align-items-center">
              <CCol />
              <CCol>
                <CListGroupItem>
                  {' '}
                  <h5>Shape:</h5>
                  {item.shape}
                </CListGroupItem>
              </CCol>
              <CCol />
            </CRow>
            <p></p>
            <CRow className="align-items-center">
              <CCol />
              <CCol>
                <CListGroupItem>
                  {' '}
                  <h5>Weight:</h5>
                  {item.weight} grams
                </CListGroupItem>
              </CCol>
              <CCol />
            </CRow>
            <p></p>
            <CRow className="align-items-center">
              <CCol />
              <CCol>
                <CListGroupItem>
                  {' '}
                  <h5>Native To:</h5>
                  {item.location}
                </CListGroupItem>
              </CCol>
              <CCol />
            </CRow>
          </CContainer>
        </CCardBody>
        <CCardFooter className="text-lg-emphasis">
          {' '}
          <EditFruit
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

FruitDetails.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}

export default FruitDetails
