import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from '@app/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaleModule } from './tale/tale.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
