import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Role from '../enums/role.enum';
import Status from '../enums/status.enum';

export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop({ required: true })
  first_name: string;
  @Prop({ required: true })
  last_name: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true, default: Date.now() })
  created_at: Date;
  @Prop({ required: true, default: Date.now() })
  updated_at: Date;
  @Prop({ required: true, enum: Status, default: 'Pending' })
  status: Status;
  @Prop({ required: true, enum: Role })
  roles: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
