import { Controller, Get } from '@nestjs/common';
import { WechatMiniProgramService } from './wechat-mini-program.service';

@Controller('wechat-mini-program')
export class WechatMiniProgramController {
  constructor(private readonly wechatMiniProgramService: WechatMiniProgramService) {}
  //小程序萌盒主页tabs数据
  @Get('getHomeTabsData')
  getHomeTabsData() {
    return this.wechatMiniProgramService.getHomeTabsData();
  }
}
