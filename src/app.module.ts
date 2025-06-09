import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WechatMiniProgramModule } from './wechat-mini-program/wechat-mini-program.module';
@Module({
  imports: [
    //公共数据库
    MongooseModule.forRoot('mongodb://admin:123456@39.106.250.71:17017/commonDbConnection?authSource=admin', {
      connectionName: 'commonDbConnection',
    }),
    //小程序数据库
    MongooseModule.forRoot('mongodb://admin:123456@39.106.250.71:17017/miniAppDbConnection?authSource=admin', {
      connectionName: 'miniAppDbConnection',
    }),
    UserModule,
    WechatMiniProgramModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
