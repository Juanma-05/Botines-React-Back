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

}