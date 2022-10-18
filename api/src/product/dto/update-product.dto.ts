import { IsDate, IsNumber, IsString } from 'class-validator';
import Grade from '../enums/grade.enum';

export class UpdateProductDto {
  @IsString()
  name: string;

  @IsString()
  grade: Grade;

  @IsString()
  description: string;

  @IsNumber()
  price: number;
}
