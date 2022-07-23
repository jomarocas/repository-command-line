import { Injectable } from '@nestjs/common';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
const readline = require('readline');

@Injectable()
export class RepositoryService {
  create(createRepositoryDto: CreateRepositoryDto) {
    return 'This action adds a new repository';
  }

  findAll() {
    return `This action returns all repository`;
  }

  findOne(id: number) {
    return `This action returns a #${id} repository`;
  }

  update(id: number, updateRepositoryDto: UpdateRepositoryDto) {
    return `This action updates a #${id} repository`;
  }

  remove(id: number) {
    return `This action removes a #${id} repository`;
  }

  commandline() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(`What's your name?`, async name => {
      const answer = await rl.question('What do you think of Node.js? ');
      console.log(`Thank you for your valuable feedback: ${answer}`);
    });
  }



}
