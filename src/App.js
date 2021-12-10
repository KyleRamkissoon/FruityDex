import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

Amplify.configure(awsconfig)

const App = () => {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: 'email',
            label: ' Email ',
            placeholder: ' email ',
            // inputProps: { required: true, autocomplete: 'username' },
          },
          {
            type: 'password',
            label: ' Password ',
            placeholder: ' password ',
            // inputProps: { required: true, autocomplete: 'new-password' },
          },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/login"*/}
            {/*  name="Login Page"*/}
            {/*  render={(props) => <Login {...props} />}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/register"*/}
            {/*  name="Register Page"*/}
            {/*  render={(props) => <Register {...props} />}*/}
            {/*/>*/}
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </AmplifyAuthenticator>
  )
}

export default App
