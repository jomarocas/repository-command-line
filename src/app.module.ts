import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '93011619680',
      database: 'repository',
      entities: ["repository/*.ts"],
      synchronize: false,
    }),
  ],
})
export class AppModule { }
