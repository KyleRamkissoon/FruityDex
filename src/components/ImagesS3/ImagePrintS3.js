import React, { useEffect, useState } from 'react'
import { CContainer } from '@coreui/react'
import S3Controller from '../../controllers/S3Controller'
import PropTypes from 'prop-types'
import { AmplifyS3Image } from '@aws-amplify/ui-react'

const ImagePrintS3 = (props) => {
  let imageS3 = props.imageS3
  console.log(imageS3)
  // let s3Controller = new S3Controller()
  return (
    <CContainer>
      <h1>{imageS3.name}</h1>
      <AmplifyS3Image key={imageS3.etag} />
    </CContainer>
  )
}

ImagePrintS3.propTypes = {
  imageS3: PropTypes.object.isRequired,
}

export default ImagePrintS3
