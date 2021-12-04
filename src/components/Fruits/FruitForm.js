import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
} from '@coreui/react'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'

const FruitForm = (props) => {
  let addFruitHandler = props.addFruitHandler
  let closeModalHandler = props.closeModalHandler
  let item = props.fruitItem // item from AddFruit or EditFruit, if add, empty object, otherwise set values from fruitItem from update fruit from fruitdetails
  let type = props.type // update? add?
  let user = props.user
  let userGroups = props.userGroups

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
    // console.log('values to validate: ', values)
    const errors = {}
    // todo validate that the current user is an admin?
    // todo use FruitsController to query db on submitted fruit name,
    // todo if the fruit exists, complain.
    // if (type === 'add') {
    //   if (fileList.length <= 0) {
    //     errors.fileList = 'Invalid Image!!'
    //   }
    // }
    // if (values.fruitWeight <= 0) {
    //   errors.fruitWeight = 'Invalid Weight, value supplied: ' + values.fruitWeight
    // }
    // if (!values.fruitStatus) {
    //   errors.fruitStatus = 'invalid status, value supplied: ' + values.fruitStatus
    // }
    console.log('errors: ', errors)
    return errors
  }
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  })
  // end formik stuff

  if (userGroups.includes('Admins')) {
    return printAdminForm()
  } else {
    return printUserForm()
  }

  function printAdminForm() {
    return (
      <CForm className="row g-3" onSubmit={formik.handleSubmit}>
        <CCol md={6}>
          <CFormLabel>Fruit Name</CFormLabel>
          <CFormInput
            onChange={formik.handleChange}
            value={formik.values.fruitName}
            name={'fruitName'}
            placeholder="Name of Fruit"
            aria-label="Fruit Name"
            required
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel>Aliases (comma seperated)</CFormLabel>
          <CFormInput
            name={'fruitAliases'}
            placeholder="Different Aliases"
            aria-label="Aliases"
            onChange={formik.handleChange}
            value={formik.values.fruitAliases}
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
        <CCol md={6}>
          <CFormLabel>Fruit Weight [grams]</CFormLabel>
          <CFormInput
            onChange={formik.handleChange}
            value={formik.values.fruitWeight}
            name={'fruitWeight'}
            placeholder="Weight of the Fruit"
            aria-label="Fruit Weight"
            required
            type={'number'}
            step="any"
            min={'1'}
            max={'100'}
          />
        </CCol>
        <CCol md={6}>
          <CFormLabel>Entry Status</CFormLabel>
          <CFormSelect
            onChange={formik.handleChange}
            value={formik.values.fruitStatus}
            name={'fruitStatus'}
            required
          >
            <option value="APPROVED">APPROVED</option>
            <option value="PENDING">PENDING</option>
          </CFormSelect>
        </CCol>
        <CCol md={12}>
          <CFormLabel>Fruit Colors [Can Select Multiple]</CFormLabel>
          <div className="row">
            <div className="col-lg-6">
              <CFormSelect
                onChange={formik.handleChange}
                multiple
                value={formik.values.fruitColors}
                name={'fruitColors'}
                required
              >
                <option defaultChecked value="Blue">
                  Blue
                </option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
                <option value="Brown">Brown</option>
                <option value="White">White</option>
                <option value="Purple">Purple</option>
                <option value="Black">Black</option>
              </CFormSelect>
            </div>
          </div>
        </CCol>
        <CCol md={12}>
          <CFormLabel>Fruit Reigion</CFormLabel>
          <CFormInput
            placeholder="Where is the Fruit Usually Found?"
            aria-label="Fruit Reigion"
            name={'fruitLocation'}
            onChange={formik.handleChange}
            value={formik.values.fruitLocation}
            required
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="inputState">Shape of Fruit</CFormLabel>
          <CFormSelect
            required
            name={'fruitShape'}
            onChange={formik.handleChange}
            value={formik.values.fruitShape}
          >
            <option value={''} />
            <option value={'Round'}>Round</option>
            <option value={'Oval'}>Oval</option>
            <option value={'Square'}>Square</option>
            <option value={'Long'}>Long</option>
            <option value={'Spiky'}>Spiky</option>
          </CFormSelect>
        </CCol>
        <CInputGroup className="mb-3">
          {type === 'update' && <CFormInput name={'imgKey'} type="file" onChange={getFileList} />}
          {type === 'add' && (
            <CFormInput required name={'imgKey'} type="file" onChange={getFileList} />
          )}
        </CInputGroup>
        <CButton type={'submit'} color="primary">
          {type === 'add' && 'Add Fruit'}
          {type === 'update' && 'Update Fruit'}
        </CButton>
      </CForm>
    )
  }
  function printUserForm() {
    return (
      <CForm className="row g-3" onSubmit={formik.handleSubmit}>
        <CCol md={6}>
          <CFormLabel>Fruit Name</CFormLabel>
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
        <CButton type={'submit'} color="primary">
          {type === 'add' && 'Add Fruit'}
          {type === 'update' && 'Update Fruit'}
        </CButton>
      </CForm>
    )
  }
}

FruitForm.propTypes = {
  fruitItem: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  userGroups: PropTypes.array.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
}

export default FruitForm
