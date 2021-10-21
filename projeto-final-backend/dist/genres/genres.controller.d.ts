import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    private readonly notFound;
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genre & {
        games: (import(".prisma/client").GenresOnGames & {
            game: import(".prisma/client").Game;
        })[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").Genre & {
        games: import(".prisma/client").GenresOnGames[];
    }>;
    update(id: string, updateGenreDto: UpdateGenreDto): Promise<import(".prisma/client").Genre>;
    remove(id: string): void;
}
