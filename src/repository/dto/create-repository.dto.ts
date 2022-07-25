import { IsNumber, IsString } from 'class-validator';

export class CreateRepositoryDto {
    @IsString()
    name: string;

    @IsString()
    nameRepository: string;

    @IsNumber()
    idDependency: number;
}
