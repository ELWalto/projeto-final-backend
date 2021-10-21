import { Genre } from 'src/genres/entities/genre.entity';

export class Game {
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailer?: string;
    gameplay?: string;
    genres?: string[];
    favorites?: number[];
}
