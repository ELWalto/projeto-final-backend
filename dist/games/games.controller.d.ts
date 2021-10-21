import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GamesController {
    private readonly gamesService;
    constructor(gamesService: GamesService);
    private readonly notFound;
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        favorites: (import(".prisma/client").GamesOnProfiles & {
            profile: import(".prisma/client").Profile;
        })[];
        genres: (import(".prisma/client").GenresOnGames & {
            genre: import(".prisma/client").Genre;
        })[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Game>;
    update(id: string, updateGameDto: UpdateGameDto): Promise<import(".prisma/client").Game>;
    remove(id: string): void;
}
