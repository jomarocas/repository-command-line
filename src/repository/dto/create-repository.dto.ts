import { IsNumber, IsString } from 'class-validator';

export class CreateRepositoryDto {
    @IsString()
    nameRepository: string;

    @IsNumber()
    idDependency: number;
}
