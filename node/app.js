import express from "express";
import cors from "cors";
//IMport database
import db from "./database/db.js";
//Import route
import blogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", blogRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la Base de datos");
} catch (error) {
  console.log(`La conexion tiene un error de : ${error}`);
}

/* app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
}) */

app.listen(8000, () => {
  console.log("Servicio en http://localhost:8000/");
});
