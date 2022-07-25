import { Global, Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryController } from './repository.controller';
import { RepositoryCommand } from './repository.command';

@Module({
  controllers: [RepositoryController],
  providers: [RepositoryService, RepositoryCommand],
  exports: [RepositoryService, RepositoryCommand]
})
export class RepositoryModule {
}
