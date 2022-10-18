import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDocument } from './schemas/product.schema';

/*TODO: 👉🏾 Create a new product and save in database                      ✅    
        👉🏾 Validate product info from request before saving in database 
        👉🏾 Search/ Get a product by ID                          
        👉🏾 Get a product by name                                
        👉🏾 Get all products from database                       
        👉🏾 Update a product                                     
        👉🏾 Delete a product --------------------------------    
        👉🏾 Handle exceptions and return to the calling client   
*/
@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async findAll(): Promise<ProductDocument[] | null> {
    return await this.productModel.find();
  }

  async findById(id: string): Promise<ProductDocument | null> {
    return this.productModel.findById(id);
  }

  async update(
    id: string,
    update: UpdateProductDto,
  ): Promise<ProductDocument | null> {
    const editProduct = await this.productModel.findByIdAndUpdate(id, update, {
      new: true,
    });
    return editProduct;
  }

  async delete(id: string): Promise<any> {
    const deleteProduct = await this.productModel.findByIdAndDelete(id);
    return deleteProduct;
  }
}
