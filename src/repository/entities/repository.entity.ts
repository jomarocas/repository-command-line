import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Repository extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameRepository: string;

    @Column()
    idDependency: JSON;
}

@Entity()
export class Dependency extends BaseEntity {
    @PrimaryGeneratedColumn()
    idDependency: number;

    @Column()
    nameDependency: string;
}