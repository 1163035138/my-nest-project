import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HomeWaterfallDocument = HydratedDocument<HomeWaterfall>;

@Schema()
export class HomeWaterfall {
  @Prop({ required: true })
  photo: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop()
  description: string;

  @Prop()
  city: string;

  @Prop({ default: [] })
  comments: string[];

  @Prop({ default: Date.now })
  date: Date;

  @Prop({ default: 0 })
  favorites: number;
}

export const HomeWaterfallSchema = SchemaFactory.createForClass(HomeWaterfall);