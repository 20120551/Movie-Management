import { Movie } from "@Domain/Entities";
import { IMovieFactory } from "@Domain/Factories";
import { Injectable } from "@Shared/IoC";
import { MovieFactoryType } from "./IMovieFactory";

@Injectable
export default class MovieFactory implements IMovieFactory {
    Create({ Id, Slot, Price, Name, Actors, Localization, Status }: MovieFactoryType): Movie {
        const movie: Movie = new Movie(Id, Name, Status, Slot, Price, Localization);
        if (Actors !== undefined) {
            movie.AddActors(Actors);
        }
        return movie;
    }

}