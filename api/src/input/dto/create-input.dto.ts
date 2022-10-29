import { IsNumber, IsString } from 'class-validator';

export class CreateInputDto {
  _id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  quantity: number;
}
