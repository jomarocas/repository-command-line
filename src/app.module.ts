import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository/repository.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RepositoryService } from './repository/repository.service';

@Module({
  imports: [RepositoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '93011619680',
      database: 'repository',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule { }
