import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { RepoEntity } from './entities/repo.entity';
import { Octokit, App } from "octokit";

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

    console.log('nameRepository', nameRepository)
    var arrVars = nameRepository.split("/");
    console.log('rest', arrVars)
    //var lastVar = arrVars.pop();
    let repo = arrVars[arrVars.length - 1];
    let owner = arrVars[arrVars.length - 2];
    const octokit = new Octokit({
      auth: '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'
    })

    /*const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated();*/

    // Octokit.js
    // https://github.com/octokit/core.js#readme

    /*let dataa = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      mediaType: {
        format: "raw",
      },
      owner: owner,
      repo: repo,
      path: 'composer.json'
    })*/
    const { data } = await octokit.rest.repos.getContent({
      mediaType: {
        format: "raw",
      },
      owner: owner,
      repo: repo,
      path: 'composer.json'
    });
    let datajson = JSON.stringify(data)
    let dataparse = JSON.parse(datajson)
    for (const tree of dataparse) {
      console.log('tree', tree)
    }
    /*Object.keys(dataparse).forEach(function (tree) {
      console.log('tree', tree)
    });*/
    //console.log("package name", dataparse.require.'nesbot/carbon');
    let file = data

    if (nameRepository) {

    }
    await this.createRepository({
      nameRepository: nameRepository,
      idDependency: 1
    })
    //console.log('foundProduct', foundProduct)
    console.log(`Name: ${nameRepository} ${branch} ${commit}`);
    //return foundProduct;
  }
}
