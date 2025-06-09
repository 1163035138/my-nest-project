import { Injectable } from '@nestjs/common';
import { HomeTabsData } from './schema/homeTabsData';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WechatMiniProgramService {
  constructor(
    @InjectModel(HomeTabsData.name, 'miniAppDbConnection')
    private homeTabsDataModel: Model<HomeTabsData>,
  ) {}
  getHomeTabsData() {
    return this.homeTabsDataModel.find().exec();
  }
}
