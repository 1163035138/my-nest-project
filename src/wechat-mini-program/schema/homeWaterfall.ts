import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// 定义 HomeWaterfall 文档类型
export type HomeWaterfallDocument = HydratedDocument<HomeWaterfall>;

// 定义 HomeWaterfall 模型的 Schema
@Schema()
export class HomeWaterfall {
  // 瀑布流项的照片，必填
  @Prop({ required: true })
  photos: string[];

  // 瀑布流项的标题，必填
  @Prop({ required: true })
  title: string;

  // 瀑布流项的头像，必填
  @Prop({ required: true })
  avatar: string;

  // 瀑布流头像昵称，必填
  @Prop({ required: true })
  nickname: string;

  // 瀑布流项的点赞数，默认为 0
  @Prop({ default: 0 })
  likes: number;

  // 瀑布流项的描述，可选
  @Prop()
  description: string;

  // 瀑布流项的城市，可选
  @Prop()
  city: string;

  // 瀑布流项的评论，默认为空数组
  @Prop({ default: [] })
  comments: string[];

  // 瀑布流项的收藏数，默认为 0
  @Prop({ default: 0 })
  favorites: number;
  // 属于哪个公司
  @Prop()
  company: number;
  // 创建时间
  @Prop()
  createTime: Date;
}

// 创建 HomeWaterfall 的 Schema
export const HomeWaterfallSchema = SchemaFactory.createForClass(HomeWaterfall);