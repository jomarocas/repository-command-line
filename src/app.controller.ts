import { Controller, Get } from '@nestjs/common';
import { Any } from 'typeorm';
import { AppService } from './app.service';
import { RepositoryCommand } from './repository/repository.command';

@Controller()
export class AppController {
  repositoryCommand = new RepositoryCommand()
  constructor() { }
  @Get()
  getHello(): string {
    return this.getHello();
  }

  getCommand(): void {
    this.repositoryCommand.createCommand()
  }
}
