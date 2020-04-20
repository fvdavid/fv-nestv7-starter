import { PrimaryGeneratedColumn, Entity, Column } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    stock: string;
}