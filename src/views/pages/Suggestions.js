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
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Suggestions = () => {
  return (
    <>
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
