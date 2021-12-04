import React from 'react'
import { CSpinner } from '@coreui/react'

const SmartSpinner = () => {
  return (
    <div className={'row pt-4'}>
      <div className={'col-lg-4'} />
      <div className={'col-lg-4'}>
        <CSpinner />
      </div>
      <div className={'col-lg-4'} />
    </div>
  )
}

export default SmartSpinner
