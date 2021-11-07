import React from 'react'
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardLink,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

const Profile = () => {
  return (
    <div>
      <CCard style={{ width: '18rem' }}>
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
    </div>
  )
}

export default Profile
