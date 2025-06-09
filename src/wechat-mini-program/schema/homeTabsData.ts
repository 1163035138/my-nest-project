import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; // 导入 @nestjs/mongoose 中的 Prop、Schema 和 SchemaFactory
import { HydratedDocument } from 'mongoose'; // 从 mongoose 导入 HydratedDocument 类型

export type HomeTabsDataDocument = HydratedDocument<HomeTabsData>; // 定义 HomeTabsDataDocument 类型为 HydratedDocument<HomeTabsData>

@Schema() // 使用 @Schema 装饰器定义一个 Mongoose 模式
export class HomeTabsData { // 定义 HomeTabsData 类
  @Prop() // 使用 @Prop 装饰器定义一个属性
  name: string; // 定义 name 属性，类型为字符串
}

export const HomeTabsDataSchema = SchemaFactory.createForClass(HomeTabsData); // 使用 SchemaFactory 创建 HomeTabsData 的模式
