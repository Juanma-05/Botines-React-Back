import { DataSource } from "typeorm"
import {Products} from "./products"
import {Users} from "./users"
import {Cart} from "./cart"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [Products, Users, Cart]
})

AppDataSource.initialize()
