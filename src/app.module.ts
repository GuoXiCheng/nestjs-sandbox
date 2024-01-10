import { TinyCRUDController } from './controllers/tiny-crud.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TinyCRUDController, AppController],
  providers: [AppService],
})
export class AppModule {}
