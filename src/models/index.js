// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserDetails, Fruit } = initSchema(schema);

export {
  UserDetails,
  Fruit
};