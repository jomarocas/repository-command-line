import { Controller, Get } from '@nestjs/common';
import { Any } from 'typeorm';
import { AppService } from './app.service';
import { RepositoryCommand } from './repository/repository.command';

@Controller()
export class AppController {
  constructor() { }
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
