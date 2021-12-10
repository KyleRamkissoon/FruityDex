import React, { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Fruit } from '../models'
import LandingPage from '../views/pages/landing/LandingPage'

import AdminQueries from '../controllers/AdminQueries'
import FruitsController from '../controllers/FruitsController'
import UserDetailsController from '../controllers/UserDetailsController'
import S3Controller from '../controllers/S3Controller'

let adminQuery = new AdminQueries()
let userDetailsController = new UserDetailsController()
let fruitsController = new FruitsController()
let s3Controller = new S3Controller()

const DefaultLayout = () => {
  // user that is logged in
  const [currUser, setCurrUser] = useState(null)
  const [userDetails, setUserDetails] = useState(null)
  const [currUserGroups, setCurrUserGroups] = useState([])
  const [favFruits, setFavFruits] = useState([])
  useEffect(() => {
    adminQuery.getCurrentUser().then((fetchedCognitoUser) => {
      setCurrUser(fetchedCognitoUser) // set logged in cognito user
      // get user groups
      adminQuery.getCurrentUserGroups(fetchedCognitoUser.username).then((fetchedUserGroups) => {
        let arr = []
        fetchedUserGroups.Groups.forEach((el, idx) => {
          arr.push(el.GroupName)
        })
        setCurrUserGroups(arr)
      })
      // get user details object based on username
      if (userDetails === null) {
        userDetailsController
          .queryByUserId(fetchedCognitoUser.username)
          .then((fetchedUserDetails) => {
            if (fetchedUserDetails.length === 0) {
              // user does not have a details object, so create it.
              userDetailsController
                .create(
                  fetchedCognitoUser.username,
                  fetchedCognitoUser.attributes.email,
                  '',
                  fetchedCognitoUser.attributes.email,
                  [],
                )
                .then((createdUser) => {
                  setUserDetails(createdUser)
                  // a new user will not have any fav fruits :)
                })
            } else {
              // got the existing object, set it
              setUserDetails(fetchedUserDetails[0])
              // a returning user may have fav fruits, lets check
              if ('favouriteFruits' in fetchedUserDetails[0] && favFruits.length <= 0) {
                fetchedUserDetails[0].favouriteFruits.forEach((fruitId, idx) => {
                  fruitsController.query(fruitId).then((fruit) => {
                    setFavFruits((oldArray) => [...oldArray, fruit])
                  })
                })
              }
            }
          })
      }
    })
  }, [favFruits, userDetails])

  //Fruit Catalog (approved fruits)
  const [fruits, setFruits] = useState([])
  useEffect(() => {
    fruitsController.queryAll(Fruit).then((resp) => {
      setFruits(resp)
    })
  }, [])

  // Fruit suggestions (pending fruits)
  const [fruitSuggestions, setFruitSuggestions] = useState([])
  useEffect(() => {
    fruitsController.querySuggestions().then((r) => {
      setFruitSuggestions(r)
    })
  }, [])
  const removeFruitHandler = async (item) => {
    fruitsController.delete(item.id).then((r) => {
      if (item.status === 'APPROVED') {
        fruitsController.queryAll().then((resp) => {
          setFruits(resp)
        })
      } else if (item.status === 'PENDING') {
        fruitsController.querySuggestions().then((resp) => {
          setFruitSuggestions(resp)
        })
      }
    })
  }
  const addFruitHandler = async (item, type, fileList, values) => {
    if (type === 'add') {
      s3Controller.putUploadFruitImage(fileList).then((s3Img) => {
        // get newly stored item from storage to get the etag
        values.imgKey.push(s3Img.key)
        fruitsController
          .create(
            values.fruitName,
            values.fruitColors,
            values.fruitShape,
            values.fruitWeight,
            values.fruitDetails,
            values.fruitLocation,
            values.fruitAliases,
            values.fruitStatus,
            values.imgKey,
            values.createdBy,
            values.lastUpdatedBy,
          )
          .then((createdFruit) => {
            if (createdFruit.status === 'APPROVED') {
              fruitsController.queryAll().then((resp) => {
                setFruits(resp)
              })
            } else {
              fruitsController.querySuggestions().then((resp) => {
                setFruitSuggestions(resp)
              })
            }
            // console.log('created fruit: ', resp)
            // window.location.reload()
          })
      })
    } else if (type === 'update') {
      if (fileList.length > 0) {
        s3Controller.putUploadFruitImage(fileList).then((r1) => {
          let arr1 = item.images
          let arr2 = [r1.key]
          values.imgKey = [...arr1, ...arr2]
          console.log('uploaded new image for ', values.fruitName, ' : ', r1)
          fruitsController.update(item, values).then((updatedFruit) => {
            if (updatedFruit.status === 'APPROVED') {
              fruitsController.queryAll().then((resp) => {
                setFruits(resp)
              })
            } else {
              fruitsController.querySuggestions().then((resp) => {
                setFruitSuggestions(resp)
              })
            }
          })
        })
      } else if (JSON.stringify(item) !== JSON.stringify(values)) {
        fruitsController.update(item, values).then((updatedFruit) => {
          if (updatedFruit.status === 'APPROVED') {
            fruitsController.queryAll().then((resp) => {
              setFruits(resp)
            })
          } else {
            fruitsController.querySuggestions().then((resp) => {
              setFruitSuggestions(resp)
            })
          }
        })
      }
    }
  }

  const removeFavHandler = async (item) => {
    // todo fix the backend using the commented out code block under
    if (userDetails.favouriteFruits.includes(item.id)) {
      // update userdetails
      let newUserFavs = [...userDetails.favouriteFruits]
      // eslint-disable-next-line no-unused-vars
      let removedUserItem = newUserFavs.splice(newUserFavs.indexOf(item.id), 1)
      let newUserDetails = {
        userId: userDetails.userId,
        userEmail: userDetails.userEmail,
        avatar: userDetails.avatar,
        nickname: userDetails.nickname,
        favouriteFruits: newUserFavs,
      }
      setUserDetails(newUserDetails)

      // update fav fruit catalog
      let newFavs = [...favFruits]
      // eslint-disable-next-line no-unused-vars
      let removedItem = newFavs.splice(newFavs.indexOf(item), 1)
      setFavFruits(newFavs)
    }
  }
  const addFavHandler = async (item) => {
    // todo fix the backend using the commented out code block under
    if (!userDetails.favouriteFruits.includes(item.id)) {
      let newUserDetails = {
        userId: userDetails.userId,
        userEmail: userDetails.userEmail,
        avatar: userDetails.avatar,
        nickname: userDetails.nickname,
        favouriteFruits: [...userDetails.favouriteFruits, item.id],
      }
      setUserDetails(newUserDetails)

      fruitsController.query(item.id).then((fruit) => {
        setFavFruits((oldArray) => [...oldArray, fruit])
      })
    }
  }

  if (currUser && userDetails) {
    return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader user={currUser} userGroups={currUserGroups} />
          <div className="body flex-grow-1 px-3">
            <AppContent
              fruits={fruits}
              fruitSuggestions={fruitSuggestions}
              user={currUser}
              userGroups={currUserGroups}
              userDetails={userDetails}
              favFruits={favFruits}
              removeFruitHandler={removeFruitHandler}
              addFruitHandler={addFruitHandler}
              addFavHandler={addFavHandler}
              removeFavHandler={removeFavHandler}
            />
          </div>
          <AppFooter />
        </div>
      </div>
    )
  } else {
    return <LandingPage />
  }
}

export default DefaultLayout
