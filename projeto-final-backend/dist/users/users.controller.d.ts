import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    private readonly notFound;
    create(createUserDto: CreateUserDto): Promise<{
        password: any;
        id: number;
        name: string;
        lastName: string;
        email: string;
        cpf: string;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): void;
}
