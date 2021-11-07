/*
  https://docs.amplify.aws/cli/auth/admin/
 */

import { API, Auth } from 'aws-amplify'

class AdminQueries {
  // class for handling API scripts
  constructor() {
    this._TOKEN = null
    this._API_NAME = 'AdminQueries'
    this._NEXT_TOKEN = null
    this._PATH = {
      ADD_USER_TO_GROUP: '/addUserToGroup', // Adds a user to a specific Group. Expects username and groupname in the POST body.
      REMOVE_USER_FROM_GROUP: '/removeUserFromGroup', // Removes a user from a specific Group. Expects username and groupname in the POST body.
      LIST_USERS_IN_GROUP: '/listUsersInGroup', // Lists users that belong to a specific group. Expects groupname as a GET query string. You can provide an OPTIONAL limit (between 0 and 60) as a GET query string, which returns a NextToken that can be provided as a token query string for pagination.
      CONFIRM_USER_SIGN_UP: '/confirmUserSignUp', // Confirms a users signup. Expects username in the POST body.
      DISABLE_USER: '/disableUser', // Disables a user. Expects username in the POST body.
      ENABLE_USER: '/enableUser', // Enables a user. Expects username in the POST body.
      GET_USER: '/getUser', // Gets specific user details. Expects username as a GET query string.
      LIST_USERS: '/listUsers', // Lists all users in the current Cognito User Pool. You can provide an OPTIONAL limit (between 0 and 60) as a GET query string, which returns a NextToken that can be provided as a token query string for pagination.
      LIST_GROUPS: '/listGroups', // Lists all groups in the current Cognito User Pool. You can provide an OPTIONAL limit (between 0 and 60) as a GET query string, which returns a NextToken that can be provided as a token query string for pagination.
      LIST_GROUPS_FOR_USER: '/listGroupsForUser', // Lists groups to which current user belongs to. Expects username as a GET query string. You can provide an OPTIONAL limit (between 0 and 60) as a GET query string, which returns a NextToken that can be provided as a token query string for pagination.
      SIGN_USER_OUT: '/signUserOut', // Signs a user out from User Pools, but only if the call is originating from that user. Expects username in the POST body.
    }
  }

  // API
  async addToGroup(username, groupname) {
    let myInit = {
      body: {
        username: username,
        groupname: groupname,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      },
    }
    return await API.post(this._API_NAME, this._PATH.ADD_USER_TO_GROUP, myInit)
  }

  async getAllMembers() {
    let myInit = {
      queryStringParameters: {
        groupname: 'Members',
        // limit: limit,
        token: this._NEXT_TOKEN,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      },
    }
    const { NextToken, ...rest } = await API.get(
      this._API_NAME,
      this._PATH.LIST_USERS_IN_GROUP,
      myInit,
    )
    this._NEXT_TOKEN = NextToken
    return rest
  }

  async getAllUsers() {
    let myInit = {
      queryStringParameters: {
        // limit: limit,
        token: this._NEXT_TOKEN,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
      },
    }
    const { NextToken, ...rest } = await API.get(this._API_NAME, this._PATH.LIST_USERS, myInit)
    this._NEXT_TOKEN = NextToken
    return rest
  }

  async getCurrentUser() {
    return await Auth.currentAuthenticatedUser()
  }

  // utils
  // convert the default users array from the promise to a cleaner array of user objects
  // primarily used for printing the admin table
  getCleanUserObjects(users) {
    let vals = []

    users.map((el, idx) => {
      vals[idx] = getUserObject(el)
      return el
    })

    return vals

    function getUserObject(user) {
      let val = {}
      let attributes = user.Attributes
      val.id = user.Username
      val.email = attributes[2].Value
      val.verified = attributes[1].Value
      val.dateCreated = user.UserCreateDate
      val.lastModifiedDate = user.UserLastModifiedDate
      val.enabled = user.Enabled
      val.status = user.UserStatus
      return val
    }
  }
}

export default AdminQueries
