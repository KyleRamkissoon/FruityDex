// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FruitSuggestions, UserFruitTable, Fruit } = initSchema(schema);

export {
  FruitSuggestions,
  UserFruitTable,
  Fruit
};