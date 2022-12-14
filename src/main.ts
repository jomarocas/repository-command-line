import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Inject, Injectable } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RepositoryCommand } from './repository/repository.command';
import { AppController } from './app.controller';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const command: RepositoryCommand = await app.select<AppModule>(AppModule).get(RepositoryCommand);
  command.createCommand();
  //const app = await NestFactory.create(AppModule);
}
/*async function bootstrap() {
  //constructor(private authService: AuthService) {}
  const app = await NestFactory.create(AppModule);
  //const p = new RepositoryModule();
  const options = new DocumentBuilder()
    .setTitle('NestJS Cli')
    .setDescription('The Realworld API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}*/
bootstrap();

