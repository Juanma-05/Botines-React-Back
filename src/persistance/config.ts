import { DataSource } from "typeorm"
import {products} from "./products"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [products, users, carts]
})

AppDataSource.initialize()