import express from "express";
import {getFiltrer, getProducts} from "../controllers/controllers"

const router =express.Router()

//punto 1
  router.get("/productos", getProducts)
  
//punto 2
  router.get("/productos/precios/:precios", getFiltrer)

//punto 3
// router.put("/productosymercancia/filtrado/:filtrado",(req, res)=>{
//   const {filtrado} =req.params;
//   const {nombre, precio, paisorigen} =req.body;
//   const productofiltrado=productosymercancia.findIndex((producto)=>producto.modelo=== filtrado );
//   if (productofiltrado !== -1) {
//     productosymercancia[productofiltrado] = {nombre, precio, paisorigen};
//     res.json(productosymercancia[productofiltrado]);
//   }
//   else {
//     res.status(404).send('Error 404: El producto no existe');
// }
// })

//punto 4
  // router.delete("/productosymercancia/modelo/:modelo", (req, res)=>{
  //     const modelo = req.params.modelo;
  //     const index = productosymercancia.findIndex((producto)=> producto.modelo==modelo)
  //     if (index !==-1){
  //         productosymercancia.splice(index, 1);
  //         res.json({message:"Producto eliminado"})
  //     } else{
  //         res.status(404).json({message:"Producto no encontrado"})
  //     }
  // })

  
  

  

 
  // router.get("/productosymercancia/pais/:pais",(req, res)=>{
  //   const {pais} =req.params;
  //   const productomayor100=productosymercancia.filter((producto)=>producto.paisorigen== String(pais) );
  //   res.json(productomayor100);
  //  })


  //  router.post("/create",(req, res) =>{
  //   const createproduct = req.body;
  //   productosymercancia.push(createproduct); //le hacemos un push al array ya creado que los datos van en el body
  //   console.log(productosymercancia);
  //   res.status(201).send(productosymercancia);
  // })

  export default router;
  
