import { MovieException } from "@Shared/Exceptions";

export default class InvalidQuantityException extends MovieException {
    constructor(public quantity: number) {
        super(`Quantity must greater than 0 but now is ${quantity}`);

    }
}