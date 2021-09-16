import { Product } from './product';
import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/db";

export class Flower extends Model {
  public id!: number;
  public name!: string;
  public color!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Flower.init(
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
    color: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "flowers",
    sequelize: database, // this bit is important
  }
);
