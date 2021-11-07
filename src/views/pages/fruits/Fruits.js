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
  CModal,
  CModalTitle,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

const Fruits = () => {
  //Fruit Catalog
  const [visible, setVisible] = useState(false)
  return (
    <CContainer>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <>
          <CButton onClick={() => setVisible(!visible)}>Add Fruits</CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Enter New Fruit Information</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel>Fruit Name</CFormLabel>
                  <CFormInput placeholder="Name of Fruit" aria-label="Fruit Name" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel>Aliases</CFormLabel>
                  <CFormInput placeholder="Different Aliases" aria-label="Aliases" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel>Fruit Details</CFormLabel>
                  <CFormInput
                    placeholder="Common Details of the Fruit"
                    aria-label="Fruit Details"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel>Fruit Weight [grams]</CFormLabel>
                  <CFormInput placeholder="Weight of the Fruit" aria-label="Fruit Weight" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel>Fruit Colors [Can Select Multiple]</CFormLabel>
                  <CFormCheck id="color1" label="Red" />
                  <CFormCheck id="color2" label="Yellow" />
                  <CFormCheck id="color3" label="Green" />
                  <CFormCheck id="color4" label="Orange" />
                  <CFormCheck id="color5" label="Pink" />
                  <CFormCheck id="color6" label="Blue" />
                  <CFormCheck id="color7" label="Purple" />
                  <CFormCheck id="color8" label="Brown" />
                </CCol>
                <CCol md={12}>
                  <CFormLabel>Fruit Reigion</CFormLabel>
                  <CFormInput
                    placeholder="Where is the Fruit Usually Found?"
                    aria-label="Fruit Reigion"
                  />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputState">Shape of Fruit</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Round</option>
                    <option>Oval</option>
                    <option>Square</option>
                  </CFormSelect>
                </CCol>
                <CInputGroup className="mb-3">
                  <CFormInput type="file" id="inputGroupFile02" />
                  <CInputGroupText component="label" htmlFor="inputGroupFile02">
                    Upload Fruit Image
                  </CInputGroupText>
                </CInputGroup>
              </CForm>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary">Add Fruit</CButton>
            </CModalFooter>
          </CModal>
        </>
      </div>
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
