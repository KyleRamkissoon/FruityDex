import React, { useEffect, useState } from 'react'
import 'react-smart-data-table/dist/react-smart-data-table.css'
import AdminQueries from '../../../controllers/AdminQueries'
import AdminUserSmartTable from '../../../components/SmartTables/AdminUserSmartTable'
import Page500 from '../page500/Page500'
import PropTypes from 'prop-types'

const AdminUserTable = (props) => {
  let userGroups = props.userGroups

  if (!userGroups.includes('Admins')) {
    return <Page500 />
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [users, setUsers] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      async function fetchUsers() {
        const adminApi = new AdminQueries()
        const request = await adminApi.getAllUsers()
        setUsers(adminApi.getCleanUserObjects(request.Users))
        return request
      }
      fetchUsers()
    }, [])
    return <AdminUserSmartTable data={users} />
  }
}

AdminUserTable.propTypes = {
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
}
export default AdminUserTable
