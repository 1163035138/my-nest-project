import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { WechatMiniProgramService } from './wechat-mini-program.service';

@Controller('wechat-mini-program')
export class WechatMiniProgramController {
  constructor(private readonly wechatMiniProgramService: WechatMiniProgramService) {}
  //小程序萌盒主页tabs数据
  @Get('getHomeTabsData')
  getHomeTabsData() {
    return this.wechatMiniProgramService.getHomeTabsData();
  }
  //获取小程序萌盒主页瀑布流数据
  @Post('getHomeWaterfallData')
  getHomeWaterfallData(@Body() body: any) {
    return this.wechatMiniProgramService.getHomeWaterfallData(body);
  }
  //添加小程序萌盒主页瀑布流数据
  @Post('addHomeWaterfallData')
  addHomeWaterfallData(@Body() body: any) {
    return this.wechatMiniProgramService.addHomeWaterfallData(body);
  }
}
