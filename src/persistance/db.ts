import {AppDataSource} from "./config"
import {Users} from "./users"

export class Db {
    constructor(){}
    getAll(){
        return AppDataSource.manager.find (Users)
    }
}