import { IsNotEmpty, MaxLength } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length: 255, nullable: false})
    marca: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    nome: string

    @IsNotEmpty()
    @UpdateDateColumn()
    data: Date

    @OneToMany(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria
   
    
}