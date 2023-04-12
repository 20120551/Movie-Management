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
const IoC_1 = require("@Shared/IoC");
const ValueObjects_1 = require("@Domain/ValueObjects");
const Exceptions_1 = require("@Application/Exceptions");
const DTO_1 = require("@Application/DTO");
const Entities_1 = require("@Domain/Entities");
const Events_1 = require("@Application/Queries/Events");
let AddActorToMovieHandler = class AddActorToMovieHandler {
    /**
     * constructor
     */
    constructor(movieRepo, actorRepo, movieFactory, mapper, publisher) {
        this._movieRepo = movieRepo;
        this._movieFactory = movieFactory;
        this._actorRepo = actorRepo;
        this._mapper = mapper;
        this._publisher = publisher;
    }
    async HandleAsync(command) {
        const { Id, Name, Role } = command;
        const movieId = ValueObjects_1.MovieId.Create(Id);
        // check movie id is existed
        const movie = await this._movieRepo.Get(movieId);
        if (movie === null) {
            throw new Exceptions_1.NotFoundMovieException();
        }
        // create new movie instance
        const _movie = this._movieFactory.Create({ ...movie });
        // add actor to movie
        const actor = ValueObjects_1.Actor.Create(Name, Role);
        _movie.AddActor(actor);
        // save changed
        const _actor = await this._actorRepo.Create(actor, movie);
        var movieReponse = this._mapper.map(_movie, Entities_1.Movie, DTO_1.MovieReadDto);
        // publish event
        const event = new Events_1.ActorAdded(Id, _actor.Id, Name, Role);
        await this._publisher.Publish("movie", "direct", "movie.actor.added", event);
        return movieReponse;
    }
};
AddActorToMovieHandler = __decorate([
    IoC_1.Injectable,
    __param(0, IoC_1.MovieRepo),
    __param(1, IoC_1.ActorRepo),
    __param(2, IoC_1.MovieFactory),
    __param(3, IoC_1.Mapper),
    __param(4, IoC_1.Publisher),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], AddActorToMovieHandler);
exports.default = AddActorToMovieHandler;
