import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ExistingUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
