/**
 * coreui bitchass have the fancy spinny button tek, i gonna try and make it myself kekw
 *
 */

import React, { useState } from 'react'
import { CButton, CSpinner } from '@coreui/react'
import PropTypes from 'prop-types'

const JjLoadingButton = (props) => {
  let handler = props.handler
  let timeout = props.timeout
  let text = props.text
  let color = props.color
  let size = props.size

  const [showSpinny, setShowSpinny] = useState(false)
  // debugger

  if (showSpinny) {
    return (
      <CButton color={'primary'} size={size} disabled={true}>
        <CSpinner size={'sm'} />
      </CButton>
    )
  } else {
    return (
      <CButton
        onClick={() => {
          spin()
        }}
        color={color}
        size={size}
        type={'submit'}
      >
        {text}
      </CButton>
    )
  }

  function spin() {
    setShowSpinny(true)
    handler()
    setTimeout(() => {
      setShowSpinny(false)
    }, timeout)
  }
}

JjLoadingButton.propTypes = {
  handler: PropTypes.func.isRequired,
  timeout: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default JjLoadingButton
