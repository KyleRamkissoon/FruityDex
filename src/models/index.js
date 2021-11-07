// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserDetails, UserFruitTable, Fruit } = initSchema(schema);

export {
  UserDetails,
  UserFruitTable,
  Fruit
};