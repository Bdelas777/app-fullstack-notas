//Connection
import db from "../database/db.js";
//sequelize import
import { DataTypes } from "sequelize";

const BlogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
