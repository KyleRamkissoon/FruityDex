import React, { useState } from 'react'
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
  CModal,
  CModalTitle,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CForm,
  CFormLabel,
  CFormInput,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'

const Suggestions = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <>
          <CButton onClick={() => setVisible(!visible)}>Add a Fruit Suggestion</CButton>
          <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Enter New Fruit Suggestion</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm className="row g-3">
                <CCol md={6}>
                  <CFormLabel>Fruit Name</CFormLabel>
                  <CFormInput placeholder="Name of Fruit" aria-label="Fruit Name" />
                </CCol>
                <CCol xs={12}>
                  <CFormLabel>Fruit Details</CFormLabel>
                  <CFormInput
                    placeholder="Short Description of the Fruit"
                    aria-label="Fruit Details"
                  />
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
              <CButton color="primary">Add Suggestion</CButton>
            </CModalFooter>
          </CModal>
        </>
      </div>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Picture of Fruit</CTableHeaderCell>
            <CTableHeaderCell scope="col">User</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fruit Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description of Fruit</CTableHeaderCell>
            <CTableHeaderCell scope="col">Button for stuff mabey</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CAvatar
                size="xl"
                src="https://5.imimg.com/data5/AK/RA/MY-68428614/apple-500x500.jpg"
              />
            </CTableHeaderCell>
            <CTableDataCell>Cocolooks</CTableDataCell>
            <CTableDataCell>Pomerac</CTableDataCell>
            <CTableDataCell>It Sweet and Red. Please add it sempai! owo</CTableDataCell>
            <CTableDataCell>
              <CButton> Remove </CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default Suggestions
