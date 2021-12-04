import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FruitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserDetails {
  readonly id: string;
  readonly userId: string;
  readonly userEmail?: string;
  readonly nickname?: string;
  readonly favouriteFruits?: (string | null)[];
  readonly avatar?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserDetails, UserDetailsMetaData>);
  static copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails, UserDetailsMetaData>) => MutableModel<UserDetails, UserDetailsMetaData> | void): UserDetails;
}

export declare class Fruit {
  readonly id: string;
  readonly name?: string;
  readonly color?: (string | null)[];
  readonly shape?: string;
  readonly weight?: number;
  readonly details?: string;
  readonly location?: string;
  readonly aliases?: string;
  readonly status?: string;
  readonly images?: (string | null)[];
  readonly createdBy?: string;
  readonly lastUpdatedBy?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fruit, FruitMetaData>);
  static copyOf(source: Fruit, mutator: (draft: MutableModel<Fruit, FruitMetaData>) => MutableModel<Fruit, FruitMetaData> | void): Fruit;
}