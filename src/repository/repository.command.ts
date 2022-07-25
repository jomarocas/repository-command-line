/*import {
  action, command, commandOption, description, option,
  optionalArg, program, requiredArg, usage,
  variadicArg, version,
  Command
} from 'commander-ts';*/
import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';
import { Command } from 'commander';
const program = new Command();

/*@program()
@version('1.0.0')
@description('A repository')
@usage('--help')
@Injectable()
export class RepositoryCommand {
  @Inject(RepositoryController)

  @option('first argument url, second argument branch, third argument commit', 'branch repository')
  env: string = null;

  constructor() {
    repositoryController: RepositoryController
  }

  run(@requiredArg('<url>') url: string) {
    //console.log(`Message: ${message}`);
  }
  //this.repositoryController.returnRepository()
  @command()
  @commandOption('1 argument url, 2 argument branch, 3 argument commit', 'branch repository', 'Url repository')
  print(    //this: Command,
    @requiredArg('url') url: string,
    @requiredArg('branch') branch: string,
    @requiredArg('commit') commit: string
  ) {
    console.log(`Name: ${url} ${branch} ${commit}`);
  }
}

const p = new RepositoryCommand();*/

@Injectable()
export class RepositoryCommand {
  private readonly repositoryService = new RepositoryService
  constructor() { }
  createCommand(): void {
    program
      .name('repository')
      .description('CLI a')
      .version('0.1.0')
      .option('-r, --url <url>', 'display just the first substring')
      .option('-b, --branch <branch>', 'display just the first substring')
      .option('-c, --commit <commit>', 'separator character', ',')
    program.parse();
    const options = program.opts()
    this.repositoryService.returnRepository(options.url, options.branch, options.branch)
    //console.log(`Name: ${options.url} ${options.branch} ${options.branch}`);
  }
}

