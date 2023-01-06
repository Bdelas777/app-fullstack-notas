// Forma sequelize.define
// import db connection
// Modelo
import db from "../database/db.js";
// Import sequelize
import { DataTypes } from "sequelize"

const BlogModel = db.define("blogs",{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default BlogModel;