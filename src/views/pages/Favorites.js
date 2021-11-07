import React from 'react'
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
} from '@coreui/react'

const Favorites = () => {
  return (
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
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <CButton component="a" href="#" color="primary" size="sm">
                  View More
                </CButton>
                <CButton component="a" href="#" color="primary" size="sm">
                  Edit Info
                </CButton>
              </div>
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
  )
}

export default Favorites
