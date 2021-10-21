import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<{
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
    findById(id: number): Promise<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    findByEmail(email: string): Promise<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: number, dto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: number): Promise<import(".prisma/client").User>;
}
