import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

import { database } from "../config/db";
import { Florist } from "./florist";
import { Flower } from "./flower";
import { Product } from "./product";

Product.belongsTo(Florist, {foreignKey: 'floristId'});
Florist.hasMany(Product, {as: 'products', foreignKey: 'floristId'});

Flower.belongsToMany(Product, {
  through: 'product_flowers',
  as: "flower",
  foreignKey: "flower_id" });

Product.belongsToMany(Flower, {
  through: 'product_flowers',
  as: "product",
  foreignKey: "product_id" });

database.sync();

export {Florist, Product, Flower};
