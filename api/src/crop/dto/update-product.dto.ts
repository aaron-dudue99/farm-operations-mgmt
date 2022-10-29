import { IsDate, IsString } from 'class-validator';
import Location from '../enums/location.enum';

export class UpdateCropDto {
  _id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  location: Location;

  @IsDate()
  plant_date: Date;

  @IsDate()
  harvest_date: Date;
}
