import { Controller, Get } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) { }

  @Get()
  getWorking(): string {
    return this.repositoryService.getWorking();
  }

  async returnRepository(url: string, branch: string, commit: string): Promise<void> {
    console.log(`Name: ${url} ${branch} ${commit}`);
    //return this.repositoryService.returnRepository(url, branch, commit);
    //return 'Working good';
  }
}