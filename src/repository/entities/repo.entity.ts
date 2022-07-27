import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RepoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameRepository: string;

    @Column()
    idDependency: number;
}
