import Role from '../enums/role.enum';

export class CreateUserDto {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  roles: Role;
}
