import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    Nombre!: string

    @Column()
    Email!: string

    @Column()
    Contraseña!: string

    constructor (Nombre:string, Email:string, Contraseña:string){
        this.Nombre=Nombre
        this.Email=Email
        this.Contraseña=Contraseña;
    }
}