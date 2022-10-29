import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InputDocument = Input & Document;

@Schema()
export class Input {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  quantity: number;
}

export const InputSchema = SchemaFactory.createForClass(Input);
