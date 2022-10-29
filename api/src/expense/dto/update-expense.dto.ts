import { IsNumber, IsString } from 'class-validator';

export class UpdateExpenseDto {
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
