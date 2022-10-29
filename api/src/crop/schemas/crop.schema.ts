import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Location from '../enums/location.enum';

export type CropDocument = Crop & Document;
@Schema()
export class Crop {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: Location })
  location: Location;

  @Prop({ required: true })
  plant_date: Date;

  @Prop({ required: true })
  harvest_date: Date;

  @Prop({ required: true, default: Date.now() })
  created_at: Date;

  @Prop({ required: true, default: Date.now() })
  updated_at: Date;
}

export const CropSchema = SchemaFactory.createForClass(Crop);
