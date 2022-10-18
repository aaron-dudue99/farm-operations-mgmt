import { IsNumber, IsString } from 'class-validator';
import Grade from '../enums/grade.enum';

export class CreateProductDto {
  _id: string;

  @IsString()
  name: string;

  @IsString()
  grade: Grade;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
