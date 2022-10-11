import { CreateContactDto } from './dto/create-contact.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDetails } from './interfaces/contact-details.interface';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('create')
  create(@Body() contact: CreateContactDto): Promise<ContactDetails | null> {
    return this.contactService.create(contact);
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<ContactDetails> {
    return this.contactService.findById(id);
  }

  @Get(':name')
  findByName(@Param('name') name: string): Promise<ContactDetails> {
    return this.contactService.findByName(name);
  }
}
