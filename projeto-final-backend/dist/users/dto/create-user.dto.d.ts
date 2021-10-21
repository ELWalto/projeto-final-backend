import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';
import { User } from '../entities/user.entity';
export declare class CreateUserDto extends User {
    name: string;
    lastName: string;
    email: string;
    password: string;
    cpf: string;
    profiles?: CreateProfileDto[];
}
