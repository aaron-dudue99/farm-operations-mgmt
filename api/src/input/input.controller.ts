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
import { CreateInputDto } from './dto/create-input.dto';
import { UpdateInputDto } from './dto/update-input.dto';
import { InputService } from './input.service';
import { InputDocument } from './schemas/input.schema';

@Controller('input')
export class InputController {
  constructor(private inputService: InputService) {}

  @Get()
  async findAll(): Promise<InputDocument[] | null> {
    return this.inputService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<InputDocument | null> {
    return this.inputService.findById(id);
  }

  @Post('create')
  async create(
    @Body(new ValidationPipe()) createInputDto: CreateInputDto,
    @Res() res,
  ): Promise<InputDocument | null> {
    const createdInput = await this.inputService.create(createInputDto);
    return res.status(HttpStatus.OK).json({
      message: `Input ${createdInput._id} created successfully`,
      input: createdInput,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateInputDto: UpdateInputDto,
    @Res() res,
  ): Promise<InputDocument | null> {
    const updatedInput = await this.inputService.update(id, updateInputDto);

    if (!updatedInput) throw new NotFoundException('Input not found');

    return res.status(HttpStatus.OK).json({
      message: `Input ${id} updated successfully`,
      input: updatedInput,
    });
  }

  @Delete(':id')
  async delete(id: string, @Res() res): Promise<void> {
    const deletedInput = await this.inputService.delete(id);

    if (!deletedInput) throw new NotFoundException('Input not found');

    return res.status(HttpStatus.OK).json({
      message: `Input ${id} deleted successfully`,
      input: deletedInput,
    });
  }
}
