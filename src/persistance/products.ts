import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    Nombre!: string

    @Column()
    Precio!: number

    @Column()
    Imagen!: string

    constructor (Nombre:string, Precio:number, Imagen:string){
        this.Nombre=Nombre
        this.Precio=Precio
        this.Imagen=Imagen

    }

}

