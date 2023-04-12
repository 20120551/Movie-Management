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
const Schema_1 = require("@Infrastructure/Read/Models/Schema");
;
let MovieUpdatedEventHandler = class MovieUpdatedEventHandler {
    constructor(dbClient) {
        this._model = dbClient.model("Movie", Schema_1.MovieSchema);
        //bind
        this.HandleAsync = this.HandleAsync.bind(this);
    }
    async HandleAsync(query) {
        console.log("event handled on MovieUpdatedEventHandler");
        const { Id, Name, Status, Localization, Price, Slot } = query;
        await this._model.updateOne({ Id: Id }, {
            $set: {
                Name, Status, Localization, Price, Slot
            }
        });
    }
};
MovieUpdatedEventHandler = __decorate([
    IoC_1.Injectable,
    __param(0, IoC_1.ReadDbClient),
    __metadata("design:paramtypes", [Object])
], MovieUpdatedEventHandler);
exports.default = MovieUpdatedEventHandler;
