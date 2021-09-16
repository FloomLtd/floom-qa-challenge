import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

import { Florist } from './florist';
import { database } from "../config/db";
import { Flower } from "./flower";

export class Product extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "products",
    sequelize: database, // this bit is important
  }
);

