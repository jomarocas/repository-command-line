import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Inject, Injectable } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RepositoryController } from './repository/repository.controller';
import { RepositoryCommand } from './repository/repository.command';
import { AppController } from './app.controller';

async function bootstrap() {
  //await CommandFactory.run(AppModule);
  /*const app = new AppController()
  app.getCommand();*/
  const app = await NestFactory.create(AppModule);
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
