import { Router } from "express";

const productRouter = Router();

productRouter.get ("/", (_, res) =>{
    res.send("HOLA MUNDO");
})
export default productRouter;

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

const enrutador={
    obtenerproductos:() =>productosymercancia,
}

console.log(enrutador.obtenerproductos());