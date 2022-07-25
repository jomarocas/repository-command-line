import { Test, TestingModule } from '@nestjs/testing';
import { spy, Stub } from 'hanbi';
import { suite } from 'uvu';
import { equal } from 'uvu/assert';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';
import { RepositoryCommand } from './repository.command';
import { AppModule } from '../app.module';

export const BasicFactorySuite = suite<{
  commandInstance: TestingModule;
  logMock: Stub<Console['log']>;
  args: string[];
}>('Basic Command With Factory');




