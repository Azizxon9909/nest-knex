import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { UsersModule } from './tasks/tasks.module';
import 'dotenv/config';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        connection: {
          host: '127.0.0.1',
          port: 5432,
          user: process.env.POSTGRES_USER,
          database: process.env.POSTGRES_DB,
          password: process.env.POSTGRES_PASSWORD,
        },
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
