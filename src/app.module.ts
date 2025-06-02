import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb://admin:123456@39.106.250.71:17017/figurine?authSource=admin'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
