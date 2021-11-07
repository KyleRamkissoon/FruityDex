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
              </div>
            </div>
          </CCardBody>
          <CCardFooter>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <CButton component="a" href="#" color="success" variant="ghost">
                Edit Info
              </CButton>
              <CButton component="a" href="#" color="danger" variant="ghost">
                Remove
              </CButton>
            </div>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Favorites
