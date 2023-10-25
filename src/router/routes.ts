import { Router } from "express";

const productRouter = Router();

productRouter.get ("/catalogo,", ( res)=> {
    res.send("HOLA MUNDO")
})
export default productRouter;