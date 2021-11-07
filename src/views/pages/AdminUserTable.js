import React from 'react'
import {
  CTableBody,
  CTableHeaderCell,
  CTable,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CAvatar,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const AdminUserTable = () => {
  //Fruit Catalog shit
  return (
    <>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Picture</CTableHeaderCell>
            <CTableHeaderCell scope="col">User</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CAvatar src="fruit-acl/images/avatars/1.jpg" />
            </CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>coconuts@gmail.com</CTableDataCell>
            <CTableDataCell>User</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default AdminUserTable
