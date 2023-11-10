import {Request, Response} from "express";



const productosymercancia=[
{nombre:"Juan", modelo:"AJD2", precio:101, paisorigen:"Argentina"},
{nombre:"Ignacio", modelo:"BBC1", precio:200, paisorigen:"Chile"},
{nombre:"Mateo", modelo:"CCI3", precio:50, paisorigen:"Australia"}
];

export function getProducts (_: Request, res:Response){
    res.send (productosymercancia);
}

export function getFiltrer (req:Request , res:Response){
    const {precios} = req.params;
    const productomayor100=productosymercancia.filter((producto)=>producto.precio > Number(precios) );
    res.json(productomayor100);
  };

