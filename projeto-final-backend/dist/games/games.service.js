"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let GamesService = class GamesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        const data = Object.assign(Object.assign({}, dto), { genres: {
                create: dto.genres
                    ? dto.genres.map((genre) => ({
                        genre: {
                            connect: { name: genre },
                        },
                    }))
                    : [],
            }, favorites: {} });
        return this.prisma.game.create({ data });
    }
    findAll() {
        return this.prisma.game.findMany({
            include: {
                favorites: { include: { profile: true } },
                genres: { include: { genre: true } },
            },
        });
    }
    async findOne(id) {
        return this.prisma.game.findUnique({
            where: { id },
            rejectOnNotFound: true,
        });
    }
    async update(id, dto) {
        const data = Object.assign(Object.assign({}, dto), { genres: {
                create: dto.genres
                    ? dto.genres.map((genre) => ({
                        genre: {
                            connect: { name: genre },
                        },
                    }))
                    : [],
            }, favorites: dto.favorites
                ? {
                    create: dto.favorites.map((fav) => ({
                        profileId: fav,
                    })),
                }
                : {} });
        return this.prisma.game.update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma.game.delete({ where: { id } });
    }
};
GamesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map