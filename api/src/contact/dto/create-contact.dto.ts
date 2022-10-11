import Relationship from '../enums/relationship.enum';

export class CreateContactDto {
  _id: string;
  name: string;
  phone_number: string;
  alt_phone_number: string;
  email: string;
  company: string;
  relationship: Relationship;
}
