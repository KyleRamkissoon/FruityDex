import React, { useEffect, useState } from 'react'
import 'react-smart-data-table/dist/react-smart-data-table.css'
import S3Controller from '../../../controllers/S3Controller'
import { Storage } from 'aws-amplify'
import AdminFruitSmartTable from '../../../components/SmartTables/AdminFruitSmartTable'

/*
  this file will have to be refactored to accommodate the fruits from the backend, for now it
  will print the images.
 */
const AdminFruitTable = () => {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    // debugger
    const s3Controller = new S3Controller()
    Storage.list(s3Controller.directories.fruit_images) // for listing ALL files without prefix, pass '' instead
      .then((result) => {
        setFruits(result)
        // console.log(fruits)
      })
      .catch((err) => console.log(err))
  }, [])

  return <AdminFruitSmartTable data={fruits} />
}

export default AdminFruitTable
