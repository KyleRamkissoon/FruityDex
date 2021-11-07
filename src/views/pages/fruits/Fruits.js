import React, { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
  CContainer,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Fruits = () => {
  //Fruit Catalog
  return (
    <CContainer>
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
              height={200}
              width={200}
            />
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Fruit Details/Aliases</CCardText>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <CButton component="a" href="#" color="primary" size="sm">
                  View More
                </CButton>
                <CButton component="a" href="#" color="primary" size="sm">
                  Add to Favorites
                </CButton>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">
                Click View for more info or Add to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y="
              height={200}
              width={200}
            />
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Fruit Details/Aliases</CCardText>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <CButton component="a" href="#" color="primary" size="sm">
                  View More
                </CButton>
                <CButton component="a" href="#" color="primary" size="sm">
                  Add to Favorites
                </CButton>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">
                Click View for more info or Add to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              src="https://static8.depositphotos.com/1020804/884/i/600/depositphotos_8840885-stock-photo-orange-fruits-on-a-white.jpg"
              height={200}
              width={200}
            />
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Fruit Details/Aliases</CCardText>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <CButton component="a" href="#" color="primary" size="sm">
                  View More
                </CButton>
                <CButton component="a" href="#" color="primary" size="sm">
                  Add to Favorites
                </CButton>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">
                Click View for more info or Add to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard className="h-100">
            <CCardImage
              orientation="top"
              src="https://www.gardeningknowhow.com/wp-content/uploads/2021/07/peach-with-half-and-leaves.jpg"
              height={200}
              width={200}
            />
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Fruit Details/Aliases</CCardText>
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <CButton component="a" href="#" color="primary" size="sm">
                  View More
                </CButton>
                <CButton component="a" href="#" color="primary" size="sm">
                  Add to Favorites
                </CButton>
              </div>
            </CCardBody>
            <CCardFooter>
              <small className="text-medium-emphasis">
                Click View for more info or Add to Favorites
              </small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Fruits
