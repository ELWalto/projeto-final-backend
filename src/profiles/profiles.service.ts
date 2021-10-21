import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateProfileDto) {
    //'This action adds a new profile';
    return this.prisma.profile.create({ data });
  }

  findAll() {
    //`This action returns all profiles`;
    return this.prisma.profile.findMany({ include: { favGames: true } });
  }

  async findOne(id: number) {
    //`This action returns a #${id} profile`;
    return this.prisma.profile.findUnique({
      where: { id },
      include: { favGames: true },
    });
  }

  async update(id: number, data: UpdateProfileDto) {
    //`This action updates a #${id} profile`;
    return this.prisma.profile.update({ where: { id }, data });
  }

  async remove(id: number) {
    //`This action removes a #${id} profile`;
    return this.prisma.profile.delete({ where: { id } });
  }
}
