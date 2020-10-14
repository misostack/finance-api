// https://github.com/typestack/class-validator#validation-decorators
import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';
export class RegisterUserDto {
  // what do we have
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  firstName: string;

  middleName: string;

  @IsNotEmpty()
  lastName: string;

  dateOfBirth: string;

  timezone: string;
}
