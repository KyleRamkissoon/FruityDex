import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import { Auth } from 'aws-amplify'

async function signUp(username, email, password, confirm_password) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        // other custom attributes
      },
    })
    console.log(user)
  } catch (error) {
    console.log('error signing up:', error)
  }
}

// PROLLY WONT NEED THIS SINCE WE DONE HAVE MFA
async function confirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.log('error confirming sign up', error)
  }
}

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  }

  handleChange = (e) => {
    // debugger
    // console.log({ [e.target.name]: e.target.value })
    // name => name attr from Form, value => value attr from Form
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = () => {
    debugger
    const { username, email, password, confirm_password } = this.state
    console.log(this.state)
    // alert(username, email, password, confirm_password)
    this.setState({
      username: username,
      email: email,
      password: password,
      confirm_password: confirm_password,
    })
    if (password !== confirm_password) {
      // clear both fields and wait
      console.log('PASSWORDS DO NOT MATCH HEHE')
      this.setState({
        username: username,
        email: email,
        password: '',
        confirm_password: '',
      })
    } else {
      // submit and register person
      signUp(...this.state)
    }
  }

  render() {
    const { username, email, password, confirm_password } = this.state
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        id={'username'}
                        placeholder="Username"
                        autoComplete="username"
                        name={'username'}
                        value={username}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        id={'email'}
                        placeholder="Email"
                        autoComplete="email"
                        name={'email'}
                        value={email}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        id={'password'}
                        name={'password'}
                        value={password}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        id={'confirm_password'}
                        name={'confirm_password'}
                        value={confirm_password}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton type={'submit'} onSubmit={this.handleSubmit} color="success">
                        Create Account
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Register
