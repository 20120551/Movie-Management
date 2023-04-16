import { createMap, forMember, mapFrom } from "@Shared/Lib/@automapper/core";
import { CreateCart, RemoveCart } from "@Application/Commands";
import { Cart } from "@Domain/Entities";
import { AutoMapper, } from "@Shared/AutoMapper";
import { CartId, MovieId, MovieName, MoviePrice, Quantity, Seat } from "@Domain/ValueObjects";
import { CartReadDto } from "@Application/DTO";


export default class CartProfile {
    public static CreateMap(mapper: AutoMapper): void {
        createMap(mapper, CreateCart, Cart,
            forMember(
                dest => dest.Id,
                mapFrom(src => CartId.Create(src.Id))
            ))

        // createMap(mapper, RemoveCart, Cart,
        //     forMember(
        //         dest => dest.Id,
        //         mapFrom(src => CartId.Create(src.Id))
        //     ))

        createMap(mapper, Cart, CartReadDto,
            forMember(
                dest => dest.Id,
                mapFrom(src => src.Id.Guid)
            ),
            forMember(
                dest => dest.MovieItems,
                mapFrom(src => src.MovieItems.map(item => {
                    const { Name, Price, Id, Seat, Quantity } = item;
                    return {
                        Name: Name.Name,
                        Price: Price.Price,
                        Id: Id.Guid,
                        Seat: Seat.Value,
                        Quantity: Quantity.Value
                    }
                }))
            ))

        createMap(mapper, CartReadDto, Cart,
            forMember(
                dest => dest.Id,
                mapFrom(src => CartId.Create(src.Id))
            ),
            forMember(
                dest => dest.MovieItems,
                mapFrom(src => src.MovieItems.map(item => {
                    const { Name, Price, Id, Seat: seat, Quantity: quantity } = item;
                    return {
                        Name: MovieName.Create(Name),
                        Price: MoviePrice.Create(Price),
                        Id: MovieId.Create(Id),
                        Seat: Seat.Create(seat),
                        Quantity: Quantity.Create(quantity)
                    }
                }))
            ))
    }
}