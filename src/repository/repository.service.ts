import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';

@Injectable()
export class RepositoryService {
  constructor() { }
  getWorking(): string {
    return 'Working good';
  }

  returnRepository(url: string, branch: string, commit: string): void {
    console.log(`Name: ${url} ${branch} ${commit}`);
    //return 'Working good';
  }
}
