import { Sequelize } from "sequelize";

//database, where and password
const db = new Sequelize("database_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
