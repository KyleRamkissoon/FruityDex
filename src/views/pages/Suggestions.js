import React from 'react'

import {
  CTableBody,
  CTableHeaderCell,
  CTable,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CAvatar,
  CButton,
  CCol,
  CForm,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CCard,
  CCardTitle,
  CCardBody,
  CCardHeader,
  CAlert,
  CFormFloating,
  CFormTextarea,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilInput } from '@coreui/icons'

const Suggestions = () => {
  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <>
          <CCard>
            <CCardHeader component="h5">Fruit Suggestions</CCardHeader>
            <CCardBody>
              <CCardTitle>Please Insert a Fruit Suggestion and We will get to it!</CCardTitle>
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormFloating className="mb-3">
                    <CFormInput type="email" id="floatingInput" placeholder="Fruit Name" />
                    <CFormLabel htmlFor="floatingInput">Name of Fruit. [Example: Apple]</CFormLabel>
                  </CFormFloating>
                </CCol>
                <CCol xs={12}>
                  <CFormFloating>
                    <CFormTextarea
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: '100px' }}
                    ></CFormTextarea>
                    <CFormLabel htmlFor="floatingTextarea2">
                      Please Enter Some Info on the Fruit. i.e Colors, Size and such.
                    </CFormLabel>
                  </CFormFloating>
                </CCol>
                <CInputGroup className="mb-3">
                  <CFormInput type="file" id="inputGroupFile02" />
                  <CInputGroupText component="label" htmlFor="inputGroupFile02">
                    Upload Fruit Image
                  </CInputGroupText>
                </CInputGroup>
              </CForm>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton type="submit" color="primary">
                  Add Suggestion
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </>
      </div>
      <CTable bordered>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Picture of Fruit</CTableHeaderCell>
            <CTableHeaderCell scope="col">User</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fruit Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description of Fruit</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <CAvatar
                  size="xl"
                  src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
                />
              </div>
            </CTableHeaderCell>
            <CTableDataCell>Cocolooks</CTableDataCell>
            <CTableDataCell>Pomerac</CTableDataCell>
            <CTableDataCell>It Sweet and Red. Please add it sempai! owo</CTableDataCell>
            <CTableDataCell>
              <CAlert color="primary" className="d-flex align-items-center">
                <CIcon
                  icon={cilInput}
                  customClassName="nav-icon"
                  className="flex-shrink-0 me-2"
                  width={24}
                  height={24}
                />
                <div> In Progress</div>
              </CAlert>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default Suggestions
