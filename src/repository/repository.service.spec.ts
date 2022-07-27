import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepoEntity } from './entities/repo.entity';
import { RepositoryService } from './repository.service';

const repoArray = [
  {
    url: 'firstName #1',
    branch: 'lastName #1',
    commit: 'lastName #1',
  },
  {
    url: 'firstName #1',
    branch: 'lastName #1',
    commit: 'lastName #1',
  },
];

const repo = {
  nameRepository: 'https://github.com/Azure-Samples/basic-php-composer',
  idDependency: 0
}

describe('RepositoryService', () => {
  let service: RepositoryService;
  let repository: Repository<RepoEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RepositoryService,
        {
          provide: getRepositoryToken(RepoEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(repoArray),
            findOneBy: jest.fn().mockResolvedValue(repo),
            save: jest.fn().mockResolvedValue(repo),
            remove: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RepositoryService>(RepositoryService);
    repository = module.get<Repository<RepoEntity>>(getRepositoryToken(RepoEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a new repo', () => {
      const oneUser = {
        firstName: 'firstName #1',
        lastName: 'lastName #1',
      };

      expect(
        service.createRepository({
          nameRepository: 'https://github.com/Azure-Samples/basic-php-composer',
          idDependency: 0
        }),
      ).resolves.toEqual(repo);
    });
  });
});
