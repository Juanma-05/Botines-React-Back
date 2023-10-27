import express from "express";
import productRouter from "../src/router/routes"

const app = express();
const port = 8080

app.use('/', productRouter)

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto:`+port)
})

const productosymercancia=[
  {
      nombre:"Juan",
      modelo:"AJD2",
      precio:1000,
      paisorigen:"Argentina"


  },
  {
      nombre:"Ignacio",
      modelo:"BBC1",
      precio:500,
      paisorigen:"Chile"


  },
  {
      nombre:"Mateo",
      modelo:"CCI3",
      precio:3000,
      paisorigen:"Australia"


  }
];
app.get("/productosymercancia", (_, res) =>
{
  res.json(productosymercancia);
})

app.get("/productosymercancia/precio->-100",(_, res)=>{
  const productomayor100=productosymercancia.filter((producto)=>producto.precio>100);
  res.json(productomayor100);
})

app.put("/productosymercancia/modificar",(_, res)=>{
    
}
