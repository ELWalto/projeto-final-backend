import { Prisma } from '.prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Profile } from '../entities/profile.entity';

export class CreateProfileDto extends Profile {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsOptional()
  image?: string | null;
  @IsInt()
  @IsNotEmpty()
  userId: number;
  @IsOptional()
  favGames?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutProfileInput;
}
