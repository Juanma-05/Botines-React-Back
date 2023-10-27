import express from "express";

const productosymercancia=[
    {nombre:"Juan", modelo:"AJD2", precio:101, paisorigen:"Argentina"},
    {nombre:"Ignacio", modelo:"BBC1", precio:200, paisorigen:"Chile"},
    {nombre:"Mateo", modelo:"CCI3", precio:50, paisorigen:"Australia"}
  ];

  const router =express.Router()

  router.get("/productosymercancia", (_, res) =>
  {
    res.json(productosymercancia);
  })
  
  router.get("/productosymercancia/precios/:precios",(req, res)=>{
    const {precios} =req.params;
    const productomayor100=productosymercancia.filter((producto)=>producto.precio > Number(precios) );
    res.json(productomayor100);
  })

  router.delete("/productosymercancia/modelo/:modelo", (req, res)=>{
      const modelo = req.params.modelo;
      const index = productosymercancia.findIndex((producto)=> producto.modelo==modelo)
      if (index !==-1){
          productosymercancia.splice(index, 1);
          res.json({message:"Producto eliminado"})
      } else{
          res.status(404).json({message:"Producto no encontrado"})
      }
  })
  

  router.get("/productosymercancia/filtrado/:filtrado",(req, res)=>{
    const {filtrado} =req.params;
    const productomayor100=productosymercancia.filter((producto)=>producto.precio== Number(filtrado) );
    res.json(productomayor100);
  })

 
  router.get("/productosymercancia/pais/:pais",(req, res)=>{
    const {pais} =req.params;
    const productomayor100=productosymercancia.filter((producto)=>producto.paisorigen== String(pais) );
    res.json(productomayor100);
   })

  export default router;
  
