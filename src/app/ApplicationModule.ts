import { ormConfig } from '../config/ormConfig';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/AppController';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig as any),
  ],
  controllers: [AppController],
  components: [
  ],
})
export class ApplicationModule { }
