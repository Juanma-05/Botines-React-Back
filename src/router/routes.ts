import { Router } from "express";

const productRouter = Router();

productRouter.get ("/", (_, res) =>{
    res.send("HOLA MUNDO");
})
export default productRouter;

