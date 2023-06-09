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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@movie/application");
const domain_1 = require("@movie/domain");
const shared_1 = require("@movie/shared");
let CartRepo = class CartRepo {
    constructor(cacheService, mapper) {
        this._cacheService = cacheService;
        this._mapper = mapper;
    }
    async Get(id) {
        const data = await this._cacheService.Get(id.Guid);
        if (data === null)
            return null;
        return this._mapper.map(data, application_1.CartReadDto, domain_1.Cart);
    }
    async Create(cart) {
        //default time to leave
        const data = this._mapper.map(cart, domain_1.Cart, application_1.CartReadDto);
        await this._cacheService.Set(cart.Id.Guid, data, domain_1.Cart.TIME_TO_LEAVE);
    }
    async Update(cart) {
        const data = this._mapper.map(cart, domain_1.Cart, application_1.CartReadDto);
        await this._cacheService.Set(cart.Id.Guid, data, domain_1.Cart.TIME_TO_LEAVE);
    }
    async Remove(cart) {
        await this._cacheService.Remove(cart.Id.Guid);
    }
};
CartRepo = __decorate([
    shared_1.Injectable,
    __param(0, shared_1.CacheService),
    __param(1, shared_1.Mapper),
    __metadata("design:paramtypes", [Object, Object])
], CartRepo);
exports.default = CartRepo;
