import React, { useState } from 'react'
import { CAlert, CButton, CContainer, CFormInput, CInputGroup } from '@coreui/react'
import S3Controller from '../../controllers/S3Controller'

const ImageUploadS3 = () => {
  let s3Controller = new S3Controller()
  const [fileList, setFileList] = useState([])
  const [uploadAttempt, setUploadAttempt] = useState(false)
  const [successfulUpload, setSuccessfulUpload] = useState(false)

  const getFileList = (e) => {
    setFileList(e.currentTarget.files)
  }
  const handleSubmit = (e) => {
    if (fileList.length <= 0) {
      setUploadAttempt(true)
      setSuccessfulUpload(false)
      return
    }
    s3Controller.uploadFruitImage(fileList)
    setUploadAttempt(false)
    setSuccessfulUpload(true)
  }

  // util functions
  const NoImageAlert = () => {
    if (uploadAttempt && fileList.length <= 0) {
      return <CAlert color={'danger'}>PLEASE CHOOSE AN IMAGE!</CAlert>
    }
    return <></>
  }
  const SuccessAlert = () => {
    if (successfulUpload && fileList.length > 0) {
      return <CAlert color={'success'}>UPLOADED!</CAlert>
    }
    return <></>
  }
  return (
    <CContainer>
      <div className="row">
        <div className="col-lg-4">
          <CInputGroup className="mb-3">
            <CButton type="button" color="secondary" variant="outline" onClick={handleSubmit}>
              Upload Image
            </CButton>
            <CFormInput type="file" name={'fileinput'} aria-label="Upload" onChange={getFileList} />
          </CInputGroup>
        </div>
        <div className="col-lg-6">
          <SuccessAlert />
          <NoImageAlert />
        </div>
      </div>
    </CContainer>
  )
}

export default ImageUploadS3
