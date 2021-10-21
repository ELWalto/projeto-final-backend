import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  ValidateNested,
} from 'class-validator';
import { IsCpf } from 'src/decorators/cpf.decorator';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsString({ message: 'The name must be string type.' })
  @IsNotEmpty({ message: 'The name must not be empty.' })
  name: string;

  @IsString({ message: 'The last name must be string type.' })
  @IsNotEmpty({ message: 'The last name must not be empty.' })
  lastName: string;

  @IsNotEmpty({ message: 'The e-mail must not be empty.' })
  @IsEmail()
  email: string;

  @Length(4, 20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @IsString({ message: 'The password must be string type.' })
  @IsNotEmpty({ message: 'The password must not be empty.' })
  password: string;

  @IsString({ message: 'The CPF must be string type.' })
  @IsNotEmpty({ message: 'The CPF must not be empty.' })
  @IsCpf()
  cpf: string;

  @ValidateNested({ each: true })
  @Type(() => CreateProfileDto)
  @IsArray()
  @IsOptional()
  profiles?: CreateProfileDto[];
}
