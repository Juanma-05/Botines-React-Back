import {Request, Response} from "express";
import {Db} from "../persistance/db" 

const productos=[
{nombre:"Juan", modelo:"AJD2", precio:101, paisorigen:"Argentina"},
{nombre:"Ignacio", modelo:"BBC1", precio:200, paisorigen:"Chile"},
{nombre:"Mateo", modelo:"CCI3", precio:50, paisorigen:"Australia"}
];

export const getAll=async() => {
    await Db.getAll();   
}

export function getProducts (_: Request, res:Response){
    res.send (productos);
}

export function getFiltrer (req:Request , res:Response){
    const {precios} = req.params;
    const productomayor100=productos.filter((producto)=>producto.precio > Number(precios) );
    res.json(productomayor100);
  };

//  export function postProduts (req: Request, res: Response) => {
//    const {nombre, precio, paisorigen} =req.body;
    
//    if (!nombre )