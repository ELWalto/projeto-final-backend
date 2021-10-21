import { Game } from '../entities/game.entity';
export declare class CreateGameDto extends Game {
    title: string;
    cover: string;
    description: string;
    year: number;
    imdb: number;
    trailer?: string | null;
    gameplay?: string | null;
    genres?: string[];
    favorites?: number[];
}
