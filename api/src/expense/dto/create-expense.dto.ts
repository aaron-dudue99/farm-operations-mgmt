import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  _id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
