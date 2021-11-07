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
  CCarousel,
  CCarouselItem,
  CImage,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Details = () => {
  //Fruit Catalog shit
  return (
    <>
      <CCard className="mb-3" style={{ maxWidth: '1000px' }}>
        <CRow className="g-0">
          <CCol md={4}>
            <div className="clearfix">
              <CCardImage
                orientation="top"
                align="start"
                rounded
                src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
                width={600}
                height={300}
              />
            </div>
          </CCol>
          <CCol md={8}>
            <CCardBody>
              <CCardTitle>Fruit Name</CCardTitle>
              <CCardText>Add Info Stuff and thing here</CCardText>
              <CCardText>
                <small className="text-medium-emphasis">Aliases</small>
              </CCardText>
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    </>
  )
}

export default Details
