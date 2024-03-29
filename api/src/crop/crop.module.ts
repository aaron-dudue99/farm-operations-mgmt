import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CropController } from './crop.controller';
import { CropService } from './crop.service';
import { CropSchema } from './schemas/crop.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Crop', schema: CropSchema }])],
  controllers: [CropController],
  providers: [CropService],
  exports: [CropService],
})
export class CropModule {}
