import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardText,
  CCardTitle,
  CImage,
  CHeaderBrand,
  CContainer,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Details = () => {
  return (
    <CContainer>
      <CCard className="text-center">
        <CHeaderBrand className="fs-1">Fruit Name</CHeaderBrand>
        <div className="clearfix">
          <CImage
            align="center"
            rounded
            src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
            width={300}
            height={300}
          />
        </div>
        <CCardBody>
          <CCardTitle>Aliases</CCardTitle>
          <CCardText>Details</CCardText>
          <CButton href="#">Add to Favorites</CButton>
        </CCardBody>
        <CCardFooter className="text-medium-emphasis">--</CCardFooter>
      </CCard>
    </CContainer>
  )
}

export default Details
