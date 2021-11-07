import React, { useState } from 'react'
import {
  CTableBody,
  CTableHeaderCell,
  CTable,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CAvatar,
  CAlert,
  CButton,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilThumbUp } from '@coreui/icons'

const AdminSuggestions = () => {
  return (
    <>
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
              <CAlert color="success" className="d-flex align-items-center">
                <CIcon
                  icon={cilThumbUp}
                  customClassName="nav-icon"
                  className="flex-shrink-0 me-2"
                  width={24}
                  height={24}
                />
                <div>
                  <CFormCheck
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    label="Completed"
                    defaultChecked
                  />
                  <CFormCheck
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                    label="Not Completed"
                  />
                </div>
              </CAlert>
              <CButton color="danger">Remove</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default AdminSuggestions
