import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Favorites = () => {
  //Fruit Catalog shit
  return (
    <CRow>
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
        <CCol xs>
          <CCard className="h-100">
            <div className="clearfix">
              <CCardImage
                orientation="top"
                align="start"
                rounded
                src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
                width={200}
                height={200}
              />
            </div>
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Details For fruit</CCardText>
            </CCardBody>
            <CCardFooter>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <CButton color="primary" className="me-md-2">
                  View More
                </CButton>
                <CButton color="primary">Edit</CButton>
              </div>
              <small className="text-medium-emphasis">Click View for more Info or Edit Info</small>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Favorites
