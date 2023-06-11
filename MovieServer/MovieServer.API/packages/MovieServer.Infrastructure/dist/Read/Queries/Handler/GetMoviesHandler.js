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
const Schema_1 = require("../../Models/Schema");
;
let GetMoviesHandler = class GetMoviesHandler {
    constructor(dbClient) {
        this._model = dbClient.model("Movie", Schema_1.MovieSchema);
    }
    async HandleAsync(query) {
        const { Page, Take } = query;
        var result = await this._model.find().skip(Page * Take).limit(Take);
        // automapper map result
        return result;
    }
};
GetMoviesHandler = __decorate([
    shared_1.Injectable,
    __param(0, shared_1.ReadDbClient),
    __metadata("design:paramtypes", [Object])
], GetMoviesHandler);
exports.default = GetMoviesHandler;