import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInputDto } from './dto/create-input.dto';
import { UpdateInputDto } from './dto/update-input.dto';
import { InputDocument } from './schemas/input.schema';

/*TODO: 👉🏾 Create a new input and save in database            ✅    
        👉🏾 Validate input info from request before saving in database ✅
        👉🏾 Search/ Get an input by ID                          ✅
        👉🏾 Get an input by name                                ✅
        👉🏾 Get all inputs from database                       ✅ 
        👉🏾 Update an input                                     ✅
        👉🏾 Delete an input --------------------------------    ✅
        👉🏾 Handle exceptions and return to the calling client
*/

@Injectable()
export class InputService {
  constructor(
    @InjectModel('Input') private readonly inputModel: Model<InputDocument>,
  ) {}

  async findAll(): Promise<InputDocument[] | null> {
    return this.inputModel.find();
  }

  async findById(id: string): Promise<InputDocument | null> {
    return this.inputModel.findById(id);
  }

  async findByName(name: string): Promise<InputDocument | null> {
    return this.inputModel.findOne({ name: name });
  }

  async create(createInputDto: CreateInputDto): Promise<InputDocument | null> {
    const createdInput = new this.inputModel(createInputDto);
    return createdInput.save();
  }

  async update(
    id: string,
    updateInputDto: UpdateInputDto,
  ): Promise<InputDocument | null> {
    const updatedInput = await this.inputModel.findByIdAndUpdate(
      id,
      updateInputDto,
      { new: true },
    );
    return updatedInput;
  }

  async delete(id: string): Promise<InputDocument | null> {
    const deletedInput = await this.inputModel.findByIdAndDelete(id);
    return deletedInput;
  }
}
