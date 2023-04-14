"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheService = exports.CacheDbClient = exports.QueryDispatcher = exports.CommandDispatcher = exports.InversifyContainer = exports.Consumer = exports.Publisher = exports.AmqpClient = exports.Mapper = exports.MovieRemovedEventHandler = exports.MovieUpdatedEventHandler = exports.MovieCreatedEventHandler = exports.ActorRemovedEventHandler = exports.ActorAddedEventHandler = exports.GetCartHandler = exports.SearchMovieHandler = exports.GetMoviesHandler = exports.GetMovieHandler = exports.AddMovieToCartHandler = exports.UpdateMovieFromCartHandler = exports.RemoveMovieFromCartHandler = exports.RemoveCartHandler = exports.CreateCartHandler = exports.UpdateMovieHandler = exports.RemoveMovieHandler = exports.RemoveActorFromMovieHandler = exports.CreateMovieHandler = exports.AddActorToMovieHandler = exports.CartFactory = exports.CartRepo = exports.MovieFactory = exports.ActorRepo = exports.MovieRepo = exports.WriteDbClient = exports.ReadDbClient = void 0;
const inversify_1 = require("inversify");
const Type_1 = require("./Type");
exports.ReadDbClient = (0, inversify_1.inject)(Type_1.TYPES.ReadDbClient);
exports.WriteDbClient = (0, inversify_1.inject)(Type_1.TYPES.WriteDbClient);
exports.MovieRepo = (0, inversify_1.inject)(Type_1.TYPES.MovieRepo);
exports.ActorRepo = (0, inversify_1.inject)(Type_1.TYPES.ActorRepo);
exports.MovieFactory = (0, inversify_1.inject)(Type_1.TYPES.MovieFactory);
exports.CartRepo = (0, inversify_1.inject)(Type_1.TYPES.CartRepo);
exports.CartFactory = (0, inversify_1.inject)(Type_1.TYPES.CartFactory);
exports.AddActorToMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.AddActorToMovieHandler);
exports.CreateMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.CreateMovieHandler);
exports.RemoveActorFromMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.RemoveActorFromMovieHandler);
exports.RemoveMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.RemoveMovieHandler);
exports.UpdateMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.UpdateMovieHandler);
exports.CreateCartHandler = (0, inversify_1.inject)(Type_1.TYPES.CreateCartHandler);
exports.RemoveCartHandler = (0, inversify_1.inject)(Type_1.TYPES.RemoveCartHandler);
exports.RemoveMovieFromCartHandler = (0, inversify_1.inject)(Type_1.TYPES.RemoveMovieFromCartHandler);
exports.UpdateMovieFromCartHandler = (0, inversify_1.inject)(Type_1.TYPES.UpdateMovieFromCartHandler);
exports.AddMovieToCartHandler = (0, inversify_1.inject)(Type_1.TYPES.AddMovieToCartHandler);
exports.GetMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.GetMovieHandler);
exports.GetMoviesHandler = (0, inversify_1.inject)(Type_1.TYPES.GetMoviesHandler);
exports.SearchMovieHandler = (0, inversify_1.inject)(Type_1.TYPES.SearchMovieHandler);
exports.GetCartHandler = (0, inversify_1.inject)(Type_1.TYPES.GetCartHandler);
exports.ActorAddedEventHandler = (0, inversify_1.inject)(Type_1.TYPES.ActorAddedEventHandler);
exports.ActorRemovedEventHandler = (0, inversify_1.inject)(Type_1.TYPES.ActorRemovedEventHandler);
exports.MovieCreatedEventHandler = (0, inversify_1.inject)(Type_1.TYPES.MovieCreatedEventHandler);
exports.MovieUpdatedEventHandler = (0, inversify_1.inject)(Type_1.TYPES.MovieUpdatedEventHandler);
exports.MovieRemovedEventHandler = (0, inversify_1.inject)(Type_1.TYPES.MovieRemovedEventHandler);
exports.Mapper = (0, inversify_1.inject)(Type_1.TYPES.Mapper);
// amqp
exports.AmqpClient = (0, inversify_1.inject)(Type_1.TYPES.AmqpClient);
exports.Publisher = (0, inversify_1.inject)(Type_1.TYPES.Publisher);
exports.Consumer = (0, inversify_1.inject)(Type_1.TYPES.Consumer);
// service collection
exports.InversifyContainer = (0, inversify_1.inject)(Type_1.TYPES.InversifyContainer);
exports.CommandDispatcher = (0, inversify_1.inject)(Type_1.TYPES.CommandDispatcher);
exports.QueryDispatcher = (0, inversify_1.inject)(Type_1.TYPES.QueryDispatcher);
// cache service
exports.CacheDbClient = (0, inversify_1.inject)(Type_1.TYPES.CacheDbClient);
exports.CacheService = (0, inversify_1.inject)(Type_1.TYPES.CacheService);
