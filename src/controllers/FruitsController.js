import { DataStore } from '@aws-amplify/datastore'
import { Fruit } from '../models'

class FruitsController {
  // constructor() {}

  async create(
    name,
    color,
    shape,
    weight,
    details,
    location,
    aliases,
    status,
    images,
    createdBy,
    lastUpdatedBy,
  ) {
    return await DataStore.save(
      new Fruit({
        name: name,
        color: color,
        shape: shape,
        weight: weight,
        details: details,
        location: location,
        aliases: aliases,
        status: status,
        images: images,
        createdBy: createdBy,
        lastUpdatedBy: lastUpdatedBy,
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
      Fruit.copyOf(original, (updated) => {
        // Update the values on {item} variable to update DataStore entry
        updated.name = newValues.fruitName
        updated.color = newValues.fruitColors
        updated.shape = newValues.fruitShape
        updated.weight = newValues.fruitWeight
        updated.details = newValues.fruitDetails
        updated.location = newValues.fruitLocation
        updated.aliases = newValues.fruitAliases
        updated.status = newValues.fruitStatus
        updated.images = newValues.imgKey
        updated.createdBy = newValues.createdBy
        updated.lastUpdatedBy = newValues.lastUpdatedBy
      }),
    )
  }

  async delete(id) {
    const modelToDelete = await DataStore.query(Fruit, id)
    DataStore.delete(modelToDelete)
  }

  async queryAll() {
    return await DataStore.query(Fruit)
  }

  async query(id) {
    return await DataStore.query(Fruit, id)
  }

  async querySuggestions() {
    return await DataStore.query(Fruit, (f) => f.status('eq', 'PENDING'))
  }
}

export default FruitsController
