import Relationship from '../enums/relationship.enum';

export interface ContactDetails {
  id?: string;
  name: string;
  phone_number: string;
  alt_phone_number: string;
  email: string;
  company: string;
  relationship: Relationship;
}
