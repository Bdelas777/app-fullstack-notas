import { Sequelize } from "sequelize";
//Database, root, password and object(host and dialect)
const db = new Sequelize("database_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;