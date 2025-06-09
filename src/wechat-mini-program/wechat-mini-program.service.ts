import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeTabsData } from './schema/homeTabsData';
import { HomeWaterfall } from './schema/homeWaterfall';

@Injectable()
export class WechatMiniProgramService {
  constructor(
    @InjectModel(HomeTabsData.name, 'miniAppDbConnection')
    private homeTabsDataModel: Model<HomeTabsData>,
    @InjectModel(HomeWaterfall.name, 'miniAppDbConnection')
    private homeWaterfallModel: Model<HomeWaterfall>,
  ) {}

  async getHomeTabsData() {
    const data = await this.homeTabsDataModel.find().exec();
    return {
      errorCode: 200,
      data: data,
    };
  }
}
