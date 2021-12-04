import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import routes from '../../routes'
import PropTypes from 'prop-types'

const AppContent = (props) => {
  let fruits = props.fruits
  let fruitSuggestions = props.fruitSuggestions
  let user = props.user
  let userGroups = props.userGroups
  let userDetails = props.userDetails
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler
  let addFavHandler = props.addFavHandler
  let removeFavHandler = props.removeFavHandler
  let favFruits = props.favFruits

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component
                        {...props}
                        fruits={fruits}
                        fruitSuggestions={fruitSuggestions}
                        user={user}
                        userGroups={userGroups}
                        userDetails={userDetails}
                        favFruits={favFruits}
                        removeFruitHandler={removeFruitHandler}
                        addFruitHandler={addFruitHandler}
                        addFavHandler={addFavHandler}
                        removeFavHandler={removeFavHandler}
                      />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to="/fruits" />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

AppContent.propTypes = {
  fruits: PropTypes.array.isRequired,
  favFruits: PropTypes.array.isRequired,
  fruitSuggestions: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  userDetails: PropTypes.object,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
  addFavHandler: PropTypes.func.isRequired,
  removeFavHandler: PropTypes.func.isRequired,
}

export default React.memo(AppContent)
