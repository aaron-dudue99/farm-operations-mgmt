import { IsEmail, IsString } from 'class-validator';
import Relationship from '../enums/relationship.enum';

export class CreateContactDto {
  _id: string;

  @IsString()
  name: string;

  @IsString()
  phone_number: string;

  @IsString()
  alt_phone_number: string;

  @IsEmail()
  email: string;

  @IsString()
  company: string;

  relationship: Relationship;
}
