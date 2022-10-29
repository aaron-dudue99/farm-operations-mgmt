import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCropDto } from './dto/create-crop.dto';
import { UpdateCropDto } from './dto/update-product.dto';
import { CropDocument } from './schemas/crop.schema';

/*TODO: 👉🏾 Create a new crop and save in database            ✅    
        👉🏾 Validate crop info from request before saving in database ✅
        👉🏾 Search/ Get a crop by ID                          ✅
        👉🏾 Get a crop by name                                ✅
        👉🏾 Get all crops from database                       ✅ 
        👉🏾 Update a crop                                     ✅
        👉🏾 Delete a crop --------------------------------    ✅
        👉🏾 Handle exceptions and return to the calling client   
*/
@Injectable()
export class CropService {
  constructor(
    @InjectModel('Crop') private readonly cropModel: Model<CropDocument | null>,
  ) {}

  async findAll(): Promise<CropDocument[] | null> {
    return this.cropModel.find();
  }

  async findById(id: string): Promise<CropDocument | null> {
    return this.cropModel.findById(id);
  }

  async findByName(name: string): Promise<CropDocument | null> {
    return this.cropModel.findOne({ name: name });
  }

  async create(crop: CreateCropDto): Promise<CropDocument | null> {
    const newCrop = new this.cropModel(crop);
    return newCrop.save();
  }

  async update(id: string, crop: UpdateCropDto): Promise<CropDocument | null> {
    const editedCrop = await this.cropModel.findByIdAndUpdate(id, crop, {
      new: true,
    });

    return editedCrop;
  }

  async delete(id: string): Promise<any> {
    const deletedCrop = await this.cropModel.findByIdAndDelete(id);
    return deletedCrop;
  }
}
