// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FruitSuggestions, UserFruitTable, Users, Fruit } = initSchema(schema);

export {
  FruitSuggestions,
  UserFruitTable,
  Users,
  Fruit
};