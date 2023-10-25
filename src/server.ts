import express from "express";
import productRouter from "../src/router/routes"

const app = express();
const port = 8080

app.use('/', productRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto:`+port)
})