import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/db";
import { Product } from "./product";

export class Florist extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Florist.init(
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
    tableName: "florists",
    sequelize: database, // this bit is important
  }
);
