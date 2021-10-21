import { Prisma } from ".prisma/client"

export class Profile {
    userId: number;
    id?: number;
    title: string;
    image?: string;
    favGames?: Prisma.GamesOnProfilesUncheckedCreateNestedManyWithoutProfileInput;
}