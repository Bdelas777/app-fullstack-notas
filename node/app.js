import express from "express";
import cors from "cors";
// Database connection
import db from "./database/db.js";
// import router
import BlogRoutes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogs", BlogRoutes);

try {
  await db.authenticate();
  console.log("Conexion exitosa");
} catch (error) {
  console.log(`Conexion con errores: ${error}`);
}
// app.get('/',(req,res)=>{
//    res.send("Hello world")
// })

app.listen(8000, () => {
  console.log("Server UP running in http://localhost:8000/");
});
