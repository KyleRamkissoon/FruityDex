import React from 'react'
import { CTableBody, CTableHeaderCell, CTable, CTableRow, CTableHead } from '@coreui/react'
import PropTypes from 'prop-types'
import FruitSuggestionItem from '../../../components/FruitSuggestions/FruitSuggestionItem'
import AddFruitSuggestion from '../../../components/FruitSuggestions/AddFruitSuggestion'

const Suggestions = (props) => {
  let user = props.user
  let fruitSuggestions = props.fruitSuggestions
  let userGroups = props.userGroups
  let removeFruitHandler = props.removeFruitHandler
  let addFruitHandler = props.addFruitHandler

  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <p></p>
        <AddFruitSuggestion user={user} addFruitHandler={addFruitHandler} />
      </div>
      <p></p>
      <CTable hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">User</CTableHeaderCell>
            <CTableHeaderCell scope="col">Fruit Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Description of Fruit</CTableHeaderCell>
            <CTableHeaderCell scope="col">More Information</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>{printFruitSuggestionRows()}</CTableBody>
      </CTable>
    </>
  )

  function printFruitSuggestionRows() {
    if (userGroups.includes('Admins')) {
      return fruitSuggestions.map((el, idx) => {
        return (
          <FruitSuggestionItem
            key={idx}
            fruitItem={el}
            userGroups={userGroups}
            user={user}
            removeFruitHandler={removeFruitHandler}
            addFruitHandler={addFruitHandler}
          />
        )
      })
    } else {
      return fruitSuggestions.map((el, idx) => {
        if (el.createdBy === user.attributes.email) {
          return (
            <FruitSuggestionItem
              key={idx}
              fruitItem={el}
              userGroups={userGroups}
              user={user}
              removeFruitHandler={removeFruitHandler}
              addFruitHandler={addFruitHandler}
            />
          )
        } else {
          return null
        }
      })
    }
  }
}

Suggestions.propTypes = {
  user: PropTypes.object.isRequired,
  userGroups: PropTypes.array.isRequired,
  fruitSuggestions: PropTypes.array.isRequired,
  removeFruitHandler: PropTypes.func.isRequired,
  addFruitHandler: PropTypes.func.isRequired,
}

export default Suggestions
