
import { IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Game } from '../entities/game.entity'
export class CreateGameDto extends Game {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    cover: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsInt()
    @IsNotEmpty()
    year: number

    @IsNumber()
    @IsNotEmpty()
    imdb: number

    @IsString()
    @IsOptional()
    trailer?: string | null

    @IsString()
    @IsOptional()
    gameplay?: string | null

    @IsOptional()
    @IsInt({ each: true })
    @IsArray()
    genres?: string[]

    @IsOptional()
    @IsInt({ each: true })
    @IsArray()
    favorites?: number[]
}