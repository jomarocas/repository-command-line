import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { RepoEntity } from './entities/repo.entity';

@Injectable()
export class RepositoryService {

  constructor(
    @InjectRepository(RepoEntity)
    private readonly repositoryRepository: Repository<RepoEntity>,
  ) {
  }
  getWorking() {
    return 'works'
  }

  public async createRepository(
    createRepositoryDto: CreateRepositoryDto,
  ): Promise<RepoEntity> {
    const { nameRepository, idDependency } = createRepositoryDto;

    const repositoryEn = new RepoEntity();
    //repositoryEn.id = id;
    repositoryEn.nameRepository = nameRepository;
    repositoryEn.idDependency = idDependency;

    await this.repositoryRepository.save(repositoryEn);
    return repositoryEn;
  }

  public async findRepository(name: string) {
    const foundProduct = await this.repositoryRepository.query('SELECT * FROM "users" WHERE id = name');
  }


  /*public async editProduct(
    createRepositoryDto: CreateRepositoryDto,
    editedRepository: RepoEntity,
  ): Promise<RepoEntity> {
    const { nameRepository, idDependency } = createRepositoryDto;

    //createRepositoryDto.id = id;
    createRepositoryDto.nameRepository = nameRepository;
    createRepositoryDto.idDependency = idDependency;
    await editedRepository.save();

    return editedRepository;
  }*/


  public async returnRepository(nameRepository: string, branch: string, commit: string): Promise<void> {
    await this.createRepository({
      nameRepository: nameRepository,
      idDependency: 1
    })
    //console.log('foundProduct', foundProduct)
    console.log(`Name: ${nameRepository} ${branch} ${commit}`);
    //return foundProduct;
  }
}
