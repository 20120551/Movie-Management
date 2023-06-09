"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Exceptions_1 = require("../Exceptions");
const shared_1 = require("@movie/shared");
class Cart extends shared_1.Aggregation {
    constructor(Id) {
        super();
        this.Id = Id;
        // recevier
        // add receiver
        // update receiver
        this.MovieItems = [];
    }
    // get item
    GetItem(id) {
        const item = this.MovieItems.find(item => item.Id.Guid === id.Guid);
        if (item === undefined) {
            throw new Exceptions_1.NotFoundMovieItemException(id);
        }
        return item;
    }
    // add item
    Add(movieItem) {
        const item = this.MovieItems.find(item => item.Id.Guid === movieItem.Id.Guid);
        // founded --> increase quantity
        if (item === undefined) {
            //add
            this.MovieItems.push(movieItem);
            return;
        }
        // increase quantity
        movieItem.IncreaseQuantity(item.Quantity);
        item.Quantity = movieItem.Quantity;
    }
    Adds(movieItems) {
        for (var item of movieItems) {
            this.Add(item);
        }
    }
    Update(movieItem) {
        const item = this.MovieItems.find(item => item.Id.Guid === movieItem.Id.Guid);
        if (item === undefined) {
            throw new Exceptions_1.NotFoundMovieItemException(movieItem.Id);
        }
        item.Name = movieItem.Name;
        item.Price = movieItem.Price;
        item.Quantity = movieItem.Quantity;
        item.Seat = movieItem.Seat;
    }
    // remove item
    Remove(movieId) {
        const index = this.MovieItems.findIndex(item => item.Id.Guid === movieId.Guid);
        if (index === -1) {
            throw new Exceptions_1.NotFoundMovieItemException(movieId);
        }
        this.MovieItems.splice(index, 1);
    }
    // change quantity
    ChangeQuantity(id, quantity) {
        const item = this.MovieItems.find(item => item.Id.Guid === id.Guid);
        if (item === undefined) {
            throw new Exceptions_1.NotFoundMovieItemException(id);
        }
        item.ChangeQuantity(quantity);
    }
    // change seat
    ChangeSeat(id, seat) {
        const item = this.MovieItems.find(item => item.Id.Guid === id.Guid);
        if (item === undefined) {
            throw new Exceptions_1.NotFoundMovieItemException(id);
        }
        item.ChangeSeat(seat);
    }
    // change receiver
    ChangeReceiver(receiver) {
        this.Receiver = receiver;
    }
}
exports.default = Cart;
Cart.TIME_TO_LEAVE = 24 * 60 * 60;
