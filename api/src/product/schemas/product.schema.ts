import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Grade from '../enums/grade.enum';

export type ProductDocument = Product & Document;
@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: Grade })
  grade: Grade;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, default: Date.now() })
  created_at: Date;

  @Prop({ required: true, default: Date.now() })
  updated_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
