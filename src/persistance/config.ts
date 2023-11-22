import { DataSource } from "typeorm"
import {Products} from "./products"
import {Users} from "./Users"
// import {Cart} from "./Cart"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "database-botines",
    entities: [Products,Users]
})

AppDataSource.initialize()
