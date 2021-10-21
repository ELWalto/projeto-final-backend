import { Strategy } from 'passport-jwt';
import { UserFromJwt } from './dto/user-from-jwt.dto';
import { UserPayload } from './dto/user-payload.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UserPayload): UserFromJwt;
}
export {};
