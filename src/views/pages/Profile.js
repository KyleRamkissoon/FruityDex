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
const Profile = () => {
  ;<CCard style={{ width: '18rem' }}>
    <CCardImage orientation="top" src="/images/react.jpg" />
    <CCardBody>
      <CCardTitle>Card title</CCardTitle>
      <CCardText>
        Some quick example text to build on the card title and make up the bulk of the content.
      </CCardText>
    </CCardBody>
    <CListGroup flush>
      <CListGroupItem>Cras justo odio</CListGroupItem>
      <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
      <CListGroupItem>Vestibulum at eros</CListGroupItem>
    </CListGroup>
    <CCardBody>
      <CCardLink href="#">Card link</CCardLink>
      <CCardLink href="#">Another link</CCardLink>
    </CCardBody>
  </CCard>
}

export default Profile
