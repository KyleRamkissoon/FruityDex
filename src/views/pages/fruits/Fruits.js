import React from 'react'
import { CRow, CContainer } from '@coreui/react'
import AddFruit from '../../../components/Fruits/AddFruit'
import FruitItem from '../../../components/Fruits/FruitItem'
import PropTypes from 'prop-types'

const Fruits = (props) => {
  let fruits = props.fruits
  let user = props.user
  let userDetails = props.userDetails
  let userGroups = props.userGroups
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler
  let addFavHandler = props.addFavHandler
  let removeFavHandler = props.removeFavHandler

  return (
    <CContainer>
      {userGroups.includes('Admins') && (
        <AddFruit user={user} userGroups={userGroups} addFruitHandler={addFruitHandler} />
      )}
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
        {printFruitItems()}
      </CRow>
    </CContainer>
  )

  function printFruitItems() {
    return fruits.map((el, idx) => {
      if (el.status === 'APPROVED') {
        return (
          <FruitItem
            fruitItem={el}
            key={idx}
            userGroups={userGroups}
            user={user}
            userDetails={userDetails}
            removeFruitHandler={removeFruitHandler}
            addFruitHandler={addFruitHandler}
            addFavHandler={addFavHandler}
            removeFavHandler={removeFavHandler}
          />
        )
      } else {
        return null
      }
    })
  }
}

Fruits.propTypes = {
  fruits: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  userDetails: PropTypes.object,
  userGroups: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
  addFavHandler: PropTypes.func.isRequired,
  removeFavHandler: PropTypes.func.isRequired,
}

export default Fruits
