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
const Commands_1 = require("@Application/Commands");
const IoC_1 = require("@Shared/IoC");
const Exceptions_1 = require("@Application/Exceptions");
const Entities_1 = require("@Domain/Entities");
const Events_1 = require("@Application/Queries/Events");
let RemoveMovieHandler = class RemoveMovieHandler {
    /**
     * constructor
     */
    constructor(movieRepo, mapper, publisher) {
        this._movieRepo = movieRepo;
        this._mapper = mapper;
        this._publisher = publisher;
    }
    async HandleAsync(command) {
        const movieRequest = this._mapper.map(command, Commands_1.RemoveMovie, Entities_1.Movie);
        // check movie is existed
        const movie = await this._movieRepo.Get(movieRequest.Id);
        if (movie === null) {
            throw new Exceptions_1.NotFoundMovieException();
        }
        // store to database
        await this._movieRepo.Remove(movieRequest);
        // remove all actor associate with that movie
        // publish event
        const event = new Events_1.MovieRemoved(command.Id);
        await this._publisher.Publish("movie", "direct", "movie.removed", event);
    }
};
RemoveMovieHandler = __decorate([
    IoC_1.Injectable,
    __param(0, IoC_1.MovieRepo),
    __param(1, IoC_1.Mapper),
    __param(2, IoC_1.Publisher),
    __metadata("design:paramtypes", [Object, Object, Object])
], RemoveMovieHandler);
exports.default = RemoveMovieHandler;
