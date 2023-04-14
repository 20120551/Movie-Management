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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queries_1 = require("@Application/Queries");
const IoC_1 = require("@Shared/IoC");
const inversify_express_utils_1 = require("@Shared/Lib/inversify-express-utils");
const express_1 = __importDefault(require("express"));
let CartController = class CartController {
    _queryDispatcher;
    constructor(queryDispatcher) {
        this._queryDispatcher = queryDispatcher;
    }
    async Get(req, res) {
        const { cart_id: cartId = "" } = req.cookies;
        const query = new Queries_1.GetCart(cartId);
        const cart = await this._queryDispatcher.ExecuteAsync(query);
        return res.status(200).json(cart);
    }
};
__decorate([
    (0, inversify_express_utils_1.httpGet)("/"),
    __param(0, (0, inversify_express_utils_1.request)()),
    __param(1, (0, inversify_express_utils_1.response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "Get", null);
CartController = __decorate([
    (0, inversify_express_utils_1.controller)("/api/cart"),
    __param(0, IoC_1.QueryDispatcher),
    __metadata("design:paramtypes", [Object])
], CartController);
exports.default = CartController;
