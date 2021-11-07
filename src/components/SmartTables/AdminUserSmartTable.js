/*
  our generic smart table for the app, using SmartDataTable
 */
import React, { useState } from 'react'
import 'react-smart-data-table/dist/react-smart-data-table.css'
import SmartDataTable from 'react-smart-data-table'
import { CFormInput } from '@coreui/react'
import PropTypes from 'prop-types'
import SmartSpinner from './SmartSpinner'

const AdminUserSmartTable = (props) => {
  let data = props.data

  const [searchTerm, setSearchTerm] = useState('')
  const handleChange = (e) => {
    // https://reactjs.org/docs/forms.html
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <CFormInput onChange={handleChange} />
      <SmartDataTable
        data={data}
        name={'users'}
        className={'table table-responsive-sm table-bordered'}
        sortable
        loader={<SmartSpinner />}
        filterValue={searchTerm}
        emptyTable={<SmartSpinner />}
        onRowClick={onRowClick}
        perPage={10}
      />
    </div>
  )
}

const onRowClick = (event, { rowData, rowIndex, tableData }) => {
  // The following results should be identical
  console.log(rowData, tableData[rowIndex])
}

AdminUserSmartTable.propTypes = {
  data: PropTypes.array.isRequired,
}

export default AdminUserSmartTable
