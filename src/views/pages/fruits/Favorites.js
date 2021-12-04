import React from 'react'
import { CRow, CContainer } from '@coreui/react'
import PropTypes from 'prop-types'
import FruitItem from '../../../components/Fruits/FruitItem'

const Favorites = (props) => {
  let user = props.user
  let userDetails = props.userDetails
  let userGroups = props.userGroups
  let addFruitHandler = props.addFruitHandler
  let removeFruitHandler = props.removeFruitHandler
  let favFruits = props.favFruits
  let addFavHandler = props.addFavHandler
  let removeFavHandler = props.removeFavHandler

  return (
    <CContainer>
      <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4">
        {printFruitItems()}
      </CRow>
    </CContainer>
  )

  function printFruitItems() {
    return favFruits.map((el, idx) => {
      if (el.status === 'APPROVED') {
        return (
          <FruitItem
            fruitItem={el}
            key={idx}
            userGroups={userGroups}
            user={user}
            userDetails={userDetails}
            addFruitHandler={addFruitHandler}
            removeFruitHandler={removeFruitHandler}
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

Favorites.propTypes = {
  user: PropTypes.object.isRequired,
  userDetails: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  favFruits: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
  addFavHandler: PropTypes.func.isRequired,
  removeFavHandler: PropTypes.func.isRequired,
}

export default Favorites
