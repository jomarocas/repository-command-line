import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Repository {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameRepository: string;

    @Column()
    idDependency: JSON;

    @Column({ default: true })
    isActive: boolean;
}

@Entity()
export class Dependency {
    @PrimaryGeneratedColumn()
    idDependency: number;

    @Column()
    nameDependency: string;
}