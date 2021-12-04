/*
  our generic smart table for the app, using SmartDataTable
 */
import React, { useState } from 'react'
import 'react-smart-data-table/dist/react-smart-data-table.css'
import SmartDataTable from 'react-smart-data-table'
import { CFormInput } from '@coreui/react'
import PropTypes from 'prop-types'
import SmartSpinner from './SmartSpinner'
import { AmplifyS3Image } from '@aws-amplify/ui-react'

const headers = {
  columnKey: {
    text: 'Image',
    invisible: false,
    // sortable: true,
    // filterable: true,
    // isImg: true,
    transform: (value, index, row) => {
      return (
        <div>
          <AmplifyS3Image
            imgKey={row.key}
            level="public"
            // identityId="us-east-2:d59a5b3f-ca74-48eb-96fb-21be68996b14"
          />
        </div>
      )
    },
  },
}

const AdminFruitSmartTable = (props) => {
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
        headers={headers}
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

AdminFruitSmartTable.propTypes = {
  data: PropTypes.array.isRequired,
}

export default AdminFruitSmartTable
