import { CreateContactDto } from './dto/create-contact.dto';
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
import { ContactService } from './contact.service';
import { ContactDetails } from './interfaces/contact-details.interface';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('create')
  async create(
    @Body(new ValidationPipe()) contact: CreateContactDto,
    @Res() res,
  ): Promise<ContactDetails | null> {
    const createdContact = await this.contactService.create(contact);
    return res.status(HttpStatus.OK).json({
      message: 'Contact created successfully',
      contact: createdContact,
    });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ContactDetails> {
    return this.contactService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateContactDto,
    @Res() res,
  ) {
    const editedContact = await this.contactService.update(
      id,
      updateProductDto,
    );

    if (!editedContact) throw new NotFoundException('Contact not found');

    return res.status(HttpStatus.OK).json({
      message: 'Contact updated successfully',
      contact: editedContact,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res) {
    const deletedContact = await this.contactService.delete(id);

    if (!deletedContact) throw new NotFoundException('Contact not found');

    return res.status(HttpStatus.OK).json({
      message: 'Contact deleted successfully',
      contact: deletedContact,
    });
  }
}
