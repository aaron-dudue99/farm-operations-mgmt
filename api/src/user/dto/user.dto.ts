import Role from '../enums/role.enum';

export class UserDto {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  status: string;
  roles: Role[];
}
