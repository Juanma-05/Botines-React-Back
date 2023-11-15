import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

}