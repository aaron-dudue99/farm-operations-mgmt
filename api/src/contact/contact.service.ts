import { ContactDetails } from './interfaces/contact-details.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactDocument } from './schemas/contact.schema';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact')
    private readonly contactModel: Model<ContactDocument>,
  ) {}

  async create(contact: CreateContactDto): Promise<ContactDocument> {
    const newContact = new this.contactModel(contact);
    return newContact.save();
  }

  async findById(id: string): Promise<ContactDocument | null> {
    return this.contactModel.findById(id);
  }

  async findByName(name: string): Promise<ContactDocument | null> {
    return this.contactModel.findOne({ name: name });
  }

  async findAll(): Promise<ContactDetails[] | null> {
    return this.contactModel.find();
  }
}
