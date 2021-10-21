import { IsInt } from "class-validator";

export class ConnectProfileDto {
    @IsInt()
    profileId: number;
}
