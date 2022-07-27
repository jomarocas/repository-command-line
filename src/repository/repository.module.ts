import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { RepositoryController } from './repository.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoEntity } from './entities/repo.entity';
import { RepositoryCommand } from './repository.command';

@Module({
  imports: [TypeOrmModule.forFeature([RepoEntity])],
  controllers: [RepositoryController],
  providers: [
    RepositoryService, RepositoryCommand
  ],
  exports: [RepositoryService, RepositoryCommand]
})
export class RepositoryModule {
}
