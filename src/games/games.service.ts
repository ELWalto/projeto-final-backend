import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Prisma } from '.prisma/client';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) { }
  create(dto: CreateGameDto) {
    const data: Prisma.GameCreateInput = {
      ...dto,
      genres: {
        create: dto.genres
          ? dto.genres.map((genre) => ({
            genre: {
              connect: { name: genre },
            },
          }))
          : [],
      },
      favorites: {},
    };
    //'This action adds a new game'; create: dto.images?.length ? dto.images : [],
    return this.prisma.game.create({ data });
  }

  findAll() {
    //`This action returns all games`;
    return this.prisma.game.findMany({
      include: {
        favorites: { include: { profile: true } },
        genres: { include: { genre: true } },
      },
    });
  }

  async findOne(id: number) {
    //`This action returns a #${id} game`;
    return this.prisma.game.findUnique({
      where: { id },
      rejectOnNotFound: true,
    });
  }

  async update(id: number, dto: UpdateGameDto) {
    const data: Prisma.GameUpdateInput = {
      ...dto,
      genres: {
        create: dto.genres
          ? dto.genres.map((genre) => ({
            genre: {
              connect: { name: genre },
            },
          }))
          : [],
      },
      favorites: dto.favorites
        ? {
          create: dto.favorites.map((fav) => ({
            profileId: fav,
          })),
        }
        : {},
    };
    //`This action updates a #${id} game`;
    return this.prisma.game.update({ where: { id }, data });
  }

  async remove(id: number) {
    //`This action removes a #${id} game`;
    return this.prisma.game.delete({ where: { id } });
  }
}