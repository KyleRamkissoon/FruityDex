import { DataStore } from '@aws-amplify/datastore'
import { UserDetails } from '../models'

class UserDetailsController {
  // constructor() {}

  async create(userId, userEmail, avatar, nickname, favouriteFruits) {
    return await DataStore.save(
      new UserDetails({
        userId: userId,
        userEmail: userEmail,
        avatar: avatar,
        nickname: nickname,
        favouriteFruits: favouriteFruits,
      }),
    )
  }

  async update(original, newValues) {
    /*
    Models in DataStore are immutable.
    To update a record you must use the copyOf function to apply updates to the item’s fields
    rather than mutating the instance directly
    */
    return await DataStore.save(
      UserDetails.copyOf(original, (updated) => {
        // Update the values on {item} variable to update DataStore entry
        updated.userId = newValues.userId
        updated.avatar = newValues.avatar
        updated.nickname = newValues.nickname
        updated.favouriteFruits = newValues.favouriteFruits
      }),
    )
  }

  async addFav(original, fruitId) {
    if (!original.favouriteFruits.includes(fruitId)) {
      return await DataStore.save(
        UserDetails.copyOf(original, (updated) => {
          // Update the values on {item} variable to update DataStore entry
          updated.userId = original.userId
          updated.avatar = original.avatar
          updated.nickname = original.nickname
          updated.favouriteFruits = [...original.favouriteFruits, fruitId]
        }),
      )
    }
  }

  async removeFav(original, fruitId) {
    let newFavs = [...original.favouriteFruits]
    // eslint-disable-next-line no-unused-vars
    let removedItem = newFavs.splice(newFavs.indexOf(fruitId), 1)
    if (original.favouriteFruits.includes(fruitId)) {
      return await DataStore.save(
        UserDetails.copyOf(original, (updated) => {
          // Update the values on {item} variable to update DataStore entry
          updated.userId = original.userId
          updated.avatar = original.avatar
          updated.nickname = original.nickname
          updated.favouriteFruits = newFavs
        }),
      )
    }
  }

  async delete(id) {
    const modelToDelete = await DataStore.query(UserDetails, id)
    DataStore.delete(modelToDelete)
  }

  async query() {
    return await DataStore.query(UserDetails)
  }

  async queryByUserId(id) {
    return await DataStore.query(UserDetails, (ud) => ud.userId('eq', id))
  }

  async queryByUserEmail(email) {
    return await DataStore.query(UserDetails, (ud) => ud.userEmail('eq', email))
  }

  /**
   * util stuff
   */
  removeDupes(arr) {
    return [...new Set(arr)]
  }
}

export default UserDetailsController
