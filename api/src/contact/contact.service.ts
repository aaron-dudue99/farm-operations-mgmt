import { ContactDetails } from './interfaces/contact-details.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactDocument } from './schemas/contact.schema';
import { UpdateContactDto } from './dto/update-contact.dto';

/*TODO: 👉🏾 Create a new contact and save in database            ✅    
        👉🏾 Validate contact info from request before saving in database ✅
        👉🏾 Search/ Get a contact by ID                          ✅
        👉🏾 Get a contact by name                                ✅
        👉🏾 Get all contacts from database                       ✅ 
        👉🏾 Update a contact                                     ✅
        👉🏾 Delete a contact --------------------------------    ✅
        👉🏾 Handle exceptions and return to the calling client   
*/

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

  async update(
    id: string,
    update: UpdateContactDto,
  ): Promise<ContactDocument | null> {
    const editedContact = await this.contactModel.findByIdAndUpdate(
      id,
      update,
      { new: true },
    );

    return editedContact;
  }

  async delete(id: string): Promise<any> {
    const deletedContact = await this.contactModel.findByIdAndDelete(id);
    return deletedContact;
  }
}
