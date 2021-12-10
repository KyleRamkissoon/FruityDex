import React, { useEffect, useState } from 'react'
import 'react-smart-data-table/dist/react-smart-data-table.css'
import S3Controller from '../../../controllers/S3Controller'
import AdminFruitSmartTable from '../../../components/SmartTables/AdminFruitSmartTable'
import Page500 from '../page500/Page500'
import PropTypes from 'prop-types'

const AdminFruitTable = (props) => {
  let userGroups = props.userGroups

  if (!userGroups.includes('Admins')) {
    return <Page500 />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fruits, setFruits] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const s3Controller = new S3Controller()
      s3Controller.getAllFruitImages().then((resp) => {
        setFruits(resp)
      })
    }, [])
    return <AdminFruitSmartTable data={fruits} />
  }
}
AdminFruitTable.propTypes = {
  fruits: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
}
export default AdminFruitTable
