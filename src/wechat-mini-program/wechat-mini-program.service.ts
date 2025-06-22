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
  //小程序萌盒主页tabs数据
  async getHomeTabsData() {
    const data = await this.homeTabsDataModel.find().exec();
    return {
      errorCode: 200,
      data: data,
    };
  }
  //获取小程序萌盒主页瀑布流数据
  async getHomeWaterfallData(body: any) {
    // 解构请求参数并设置默认值
    const {
      page = 1,
      pageSize = 10,
      searchValue = '',
      company = null,
    } = body;
    
    // 转换分页参数为数字类型
    const pageNum = Number(page);
    const pageSizeNum = Number(pageSize);
    const skip = (pageNum - 1) * pageSizeNum;
    
    // 构建查询条件
    const searchCondition: any = {};
    
    // 添加公司筛选条件（如果提供）
    if (company) {
      searchCondition.company = company;
    }
    
    // 添加搜索条件（如果提供）
    if (searchValue) {
      searchCondition.$or = [
        { title: { $regex: searchValue, $options: 'i' } },
        { description: { $regex: searchValue, $options: 'i' } },
      ];
    }
    
    // 并行执行查询总数和数据查询以提高性能
    const [total, data] = await Promise.all([
      this.homeWaterfallModel.countDocuments(searchCondition),
      this.homeWaterfallModel
        .find(searchCondition)
        .skip(skip)
        .limit(pageSizeNum)
        .exec()
    ]);
    
    // 返回格式化的响应
    return {
      errorCode: 200,
      data: {
        list: data,
        pagination: {
          total,
          page: pageNum,
          pageSize: pageSizeNum,
        },
      },
    };
  }
  //添加小程序萌盒主页瀑布流数据
  async addHomeWaterfallData(body: any) {
    try {
      body.createTime = new Date();
      const res = await this.homeWaterfallModel.create(body);
      return {
        errorCode: 200,
      };
    } catch (error) {
      return {
        errorCode: 500,
        message: error.message,
      };
    }
  }
}
