import { Prisma } from '.prisma/client';
import { Profile } from '../entities/profile.entity';
export declare class CreateProfileDto extends Profile {
    title: string;
    image?: string | null;
    userId: number;
    favGames?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutProfileInput;
}
