import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import PropTypes from 'prop-types'

import { AppBreadcrumb } from '../index'

const AppHeader = (props) => {
  let userGroups = props.userGroups
  // console.log(userGroups)
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/"></CHeaderBrand>
        {userGroups.includes('Admins') === true && printAdminNavLinks()}
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )

  function printAdminNavLinks() {
    return (
      <CHeaderNav className="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink to="/fruits" component={NavLink} activeClassName="active">
            FruitDex
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink to="/adminUserTable" component={NavLink} activeClassName="active">
            Users
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink to="/adminFruitTable" component={NavLink} activeClassName="active">
            Fruit-Images
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
    )
  }
}
AppHeader.propTypes = {
  userGroups: PropTypes.array.isRequired,
}
export default AppHeader
