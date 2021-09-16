import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "ftc_example",
  dialect: "sqlite",
  storage: "./database.sqlite3",
});
