import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { CropService } from './crop.service';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-product.dto';
import { CropDocument } from './schemas/crop.schema';

@Controller('crop')
export class CropController {
  constructor(private cropService: CropService) {}

  @Get()
  async findAll(): Promise<CropDocument[] | null> {
    return this.cropService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
    @Res() res,
  ): Promise<CropDocument | null> {
    const crop = await this.cropService.findById(id);

    if (!crop) throw new NotFoundException(`Crop ${id} not found`);

    return res.status(HttpStatus.OK).json({
      crop: crop,
    });
  }

  @Post('create')
  async create(
    @Body(new ValidationPipe()) crop: CreateCropDto,
    @Res() res,
  ): Promise<CropDocument | null> {
    const createdCrop = await this.cropService.create(crop);
    return res.status(HttpStatus.OK).json({
      message: `crop ${createdCrop._id}created successfully`,
      crop: createdCrop,
    });
  }

  @Put('id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) crop: UpdateCropDto,
    @Res() res,
  ): Promise<CropDocument | null> {
    const updatedCrop = await this.cropService.update(id, crop);

    if (!updatedCrop) throw new NotFoundException('Crop not found');

    return res.status(HttpStatus.OK).json({
      message: `Crop ${id} updated successfully`,
      crop: updatedCrop,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res) {
    const deletedCrop = await this.cropService.delete(id);

    if (!deletedCrop) throw new NotFoundException('Crop not found');
    return res.status(HttpStatus.OK).json({
      message: `Crop ${id} deleted successfully`,
      crop: deletedCrop,
    });
  }
}
