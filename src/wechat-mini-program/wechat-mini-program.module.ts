import { Module } from '@nestjs/common';
import { WechatMiniProgramService } from './wechat-mini-program.service';
import { WechatMiniProgramController } from './wechat-mini-program.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeTabsData, HomeTabsDataSchema } from './schema/homeTabsData';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: HomeTabsData.name, schema: HomeTabsDataSchema }],
      'miniAppDbConnection',
    ),
  ],
  controllers: [WechatMiniProgramController],
  providers: [WechatMiniProgramService],
})
export class WechatMiniProgramModule {}
