import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Relationship from '../enums/relationship.enum';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop()
  alt_phone_number: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true, enum: Relationship })
  relationship: Relationship;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
