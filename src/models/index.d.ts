import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserFruitTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FruitMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserDetails {
  readonly id: string;
  readonly userId: string;
  readonly avatar?: string;
  readonly nickname?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserDetails, UserDetailsMetaData>);
  static copyOf(source: UserDetails, mutator: (draft: MutableModel<UserDetails, UserDetailsMetaData>) => MutableModel<UserDetails, UserDetailsMetaData> | void): UserDetails;
}

export declare class UserFruitTable {
  readonly id: string;
  readonly userId?: string;
  readonly fruitId?: string;
  readonly fruitColor?: (string | null)[];
  readonly fruitName?: string;
  readonly fruitWeight?: string;
  readonly fruitDetails?: string;
  readonly fruitLocation?: string;
  readonly fruitAliases?: (string | null)[];
  readonly fruitShape?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserFruitTable, UserFruitTableMetaData>);
  static copyOf(source: UserFruitTable, mutator: (draft: MutableModel<UserFruitTable, UserFruitTableMetaData>) => MutableModel<UserFruitTable, UserFruitTableMetaData> | void): UserFruitTable;
}

export declare class Fruit {
  readonly id: string;
  readonly name?: string;
  readonly color?: (string | null)[];
  readonly shape?: string;
  readonly weight?: number;
  readonly details?: string;
  readonly location?: string;
  readonly aliases?: (string | null)[];
  readonly status?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Fruit, FruitMetaData>);
  static copyOf(source: Fruit, mutator: (draft: MutableModel<Fruit, FruitMetaData>) => MutableModel<Fruit, FruitMetaData> | void): Fruit;
}