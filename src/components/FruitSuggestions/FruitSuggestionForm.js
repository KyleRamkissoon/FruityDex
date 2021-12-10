import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
} from '@coreui/react'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'

const FruitSuggestionForm = (props) => {
  let item = props.fruitItem
  let type = props.type
  let user = props.user
  let addFruitHandler = props.addFruitHandler
  let closeModalHandler = props.closeModalHandler

  // get the file from the upload field
  const [fileList, setFileList] = useState([])
  const getFileList = (e) => {
    setFileList(e.currentTarget.files)
  }
  // formik stuff
  // form data to store in the backend db
  let initialValues = {
    fruitName: item.name,
    fruitColors: item.color,
    fruitShape: item.shape,
    fruitWeight: item.weight,
    fruitDetails: item.details,
    fruitLocation: item.location,
    fruitAliases: item.aliases,
    fruitStatus: item.status,
    imgKey: item.images,
    createdBy: item.createdBy,
    lastUpdatedBy: user.attributes.email,
  }
  const onSubmit = (values) => {
    addFruitHandler(item, type, fileList, values)
    closeModalHandler()
  }
  const validate = (values) => {
    const errors = {}
    if (type === 'add') {
      if (fileList.length <= 0) {
        errors.fileList = 'Invalid Image!!'
      }
    }
    console.log('errors: ', errors)
    return errors
  }
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  })
  // end formik stuff

  return (
    <CForm className="row g-3" onSubmit={formik.handleSubmit}>
      <CCol md={6}>
        <CFormInput
          onChange={formik.handleChange}
          value={formik.values.fruitName}
          name={'fruitName'}
          placeholder="Name of Fruit"
          aria-label="Fruit Name"
          required
        />
      </CCol>
      <CCol xs={12}>
        <CFormLabel>Fruit Details</CFormLabel>
        <CFormTextarea
          name={'fruitDetails'}
          placeholder="Common Details of the Fruit"
          aria-label="Fruit Details"
          onChange={formik.handleChange}
          value={formik.values.fruitDetails}
          required
        />
      </CCol>
      <CInputGroup className="mb-3">
        {type === 'update' && <CFormInput name={'imgKey'} type="file" onChange={getFileList} />}
        {type === 'add' && (
          <CFormInput required name={'imgKey'} type="file" onChange={getFileList} />
        )}
      </CInputGroup>
      <CButton type={'submit'} color="primary">
        {type === 'add' && 'Add Suggestion'}
        {type === 'update' && 'Update Fruit'}
      </CButton>
    </CForm>
  )
}

FruitSuggestionForm.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
}

export default FruitSuggestionForm
