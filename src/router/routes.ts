import express from "express";

const productosymercancia=[
    {nombre:"Juan", modelo:"AJD2", precio:101, paisorigen:"Argentina"},
    {nombre:"Ignacio", modelo:"BBC1", precio:200, paisorigen:"Chile"},
    {nombre:"Mateo", modelo:"CCI3", precio:50, paisorigen:"Australia"}
  ];
  const router =express.Router()

//punto 1
  router.get("/productosymercancia", (_, res) =>
  {
    res.json(productosymercancia);
  })
  
//punto 2
  router.get("/productosymercancia/precios/:precios",(req, res)=>{
    const {precios} =req.params;
    const productomayor100=productosymercancia.filter((producto)=>producto.precio > Number(precios) );
    res.json(productomayor100);
  })

//punto 3
router.put("/productosymercancia/filtrado/:filtrado",(req, res)=>{
  const {filtrado} =req.params;
  const productofiltrado=productosymercancia.findIndex((producto)=>producto.modelo=== filtrado );
  if (productofiltrado !== -1) {
    const { nombre, precio, origen } = req.body;

    productosymercancia[productofiltrado] = {
        nombre: nombre || productosymercancia[productofiltrado].nombre,
        modelo: modelo,
        precio: precio || productosymercancia[productofiltrado].precio,
        origen: origen || productosymercancia [productofiltrado].origen,
    };

    res.send('Producto modificado correctamente');
  } else {
    res.status(404).send('Error 404: El producto no existe');
}
})

//punto 4
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

  
  

  

 
  router.get("/productosymercancia/pais/:pais",(req, res)=>{
    const {pais} =req.params;
    const productomayor100=productosymercancia.filter((producto)=>producto.paisorigen== String(pais) );
    res.json(productomayor100);
   })


   router.post("/create",(req, res) =>{
    const createproduct = req.body;
    productosymercancia.push(createproduct); //le hacemos un push al array ya creado que los datos van en el body
    console.log(productosymercancia);
    res.status(201).send(productosymercancia);
  })

  export default router;
  
