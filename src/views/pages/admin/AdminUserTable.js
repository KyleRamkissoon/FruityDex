import React, { useEffect, useState } from 'react'
import 'react-smart-data-table/dist/react-smart-data-table.css'
import AdminQueries from '../../../controllers/AdminQueries'
import AdminUserSmartTable from '../../../components/SmartTables/AdminUserSmartTable'

const AdminUserTable = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function fetchUsers() {
      const adminApi = new AdminQueries()
      const request = await adminApi.getAllUsers()
      setUsers(adminApi.getCleanUserObjects(request.Users))
      // console.log(request)
      return request
    }
    fetchUsers()
  }, [])
  // console.log(users)

  return <AdminUserSmartTable data={users} />
}

export default AdminUserTable
