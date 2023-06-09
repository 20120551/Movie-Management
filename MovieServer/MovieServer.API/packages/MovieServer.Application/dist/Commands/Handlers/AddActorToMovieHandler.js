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
const shared_1 = require("@movie/shared");
const domain_1 = require("@movie/domain");
const Exceptions_1 = require("../../Exceptions");
const Events_1 = require("../../Queries/Events");
let AddActorToMovieHandler = class AddActorToMovieHandler {
    /**
     * constructor
     */
    constructor(movieRepo, actorRepo, movieFactory, publisher) {
        this._movieRepo = movieRepo;
        this._movieFactory = movieFactory;
        this._actorRepo = actorRepo;
        this._publisher = publisher;
    }
    async HandleAsync(command) {
        const { Id, Name, Role } = command;
        const movieId = domain_1.MovieId.Create(Id);
        // check movie id is existed
        const movie = await this._movieRepo.Get(movieId);
        if (movie === null) {
            throw new Exceptions_1.NotFoundMovieException();
        }
        // create new movie instance
        const _movie = this._movieFactory.Create({ ...movie });
        // add actor to movie
        const actor = domain_1.Actor.Create(Name, Role);
        _movie.AddActor(actor);
        // save changed
        const _actor = await this._actorRepo.Create(actor, movie);
        // publish event
        const event = new Events_1.ActorAdded(Id, _actor.Id, Name, Role);
        await this._publisher.Publish("movie", "direct", "movie.actor.added", event);
    }
};
AddActorToMovieHandler = __decorate([
    shared_1.Injectable,
    __param(0, shared_1.MovieRepo),
    __param(1, shared_1.ActorRepo),
    __param(2, shared_1.MovieFactory),
    __param(3, shared_1.Publisher),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], AddActorToMovieHandler);
exports.default = AddActorToMovieHandler;
