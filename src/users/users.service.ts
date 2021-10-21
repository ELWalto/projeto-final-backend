import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '.prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    // 'This action adds a new user';
    const data: Prisma.UserCreateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      profiles: dto.profiles ? {
        create: dto.profiles
      } : {}
    }
    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
      password: undefined
    }
  }

  findAll() {
    // `This action returns all users`;
    return this.prisma.user.findMany({ include: { profiles: true } });
  }

  async findById(id: number) {
    // `This action returns a #${id} user`;
    return this.prisma.user.findUnique({
      where: { id },
      include: { profiles: true },
      rejectOnNotFound: true,
    });
  }

  async findByEmail(email: string) {
    // `This action returns a #${id} user`;
    return this.prisma.user.findUnique({
      where: { email },
      include: { profiles: true },
      rejectOnNotFound: true,
    });
  }
  
  async update(id: number, dto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
      profiles: dto.profiles ? {
        create: dto.profiles
      } : {}
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number) {
    //`This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id } });
  }
}