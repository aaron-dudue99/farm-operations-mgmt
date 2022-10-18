import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  Res,
  HttpStatus,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDocument } from './schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Post('create')
  async create(
    @Body(new ValidationPipe()) product: CreateProductDto,
    @Res() res,
  ): Promise<ProductDocument | null> {
    const createdProduct = await this.productService.create(product);

    return res.status(HttpStatus.OK).json({
      message: `Product ${createdProduct._id} created successfully`,
      product: createdProduct,
    });
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Res() res,
  ) {
    const editedProduct = await this.productService.update(
      id,
      updateProductDto,
    );

    if (!editedProduct) throw new NotFoundException('Product not found');

    return res.status(HttpStatus.OK).json({
      message: `Product ${id} updated successfully`,
      product: editedProduct,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res) {
    const deletedProduct = await this.productService.delete(id);

    if (!deletedProduct) throw new NotFoundException('Product not found');

    return res.status(HttpStatus.OK).json({
      message: `Product ${id} deleted successfully`,
      product: deletedProduct,
    });
  }
}
