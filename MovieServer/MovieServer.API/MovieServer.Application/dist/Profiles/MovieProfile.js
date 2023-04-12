"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@Shared/Lib/@automapper/core");
const Commands_1 = require("@Application/Commands");
const Entities_1 = require("@Domain/Entities");
const ValueObjects_1 = require("@Domain/ValueObjects");
const DTO_1 = require("@Application/DTO");
class MovieProfile {
    static CreateMap(mapper) {
        (0, core_1.createMap)(mapper, Commands_1.CreateMovie, Entities_1.Movie, (0, core_1.forMember)(dest => dest.Id, (0, core_1.mapFrom)(src => ValueObjects_1.MovieId.Create(src.Id))), (0, core_1.forMember)(dest => dest.Slot, (0, core_1.mapFrom)(src => ValueObjects_1.MovieSlot.Create(src.Slot))), (0, core_1.forMember)(dest => dest.Localization, (0, core_1.mapFrom)(src => ValueObjects_1.Localization.Create(src.Localization.District, src.Localization.City))), (0, core_1.forMember)(dest => dest.Price, (0, core_1.mapFrom)(src => ValueObjects_1.MoviePrice.Create(src.Price))), (0, core_1.forMember)(dest => dest.Name, (0, core_1.mapFrom)(src => ValueObjects_1.MovieName.Create(src.Name))), (0, core_1.forMember)(dest => dest.Status, (0, core_1.mapFrom)(src => ValueObjects_1.MovieStatus.Create(src.Status))));
        (0, core_1.createMap)(mapper, Commands_1.UpdateMovie, Entities_1.Movie, (0, core_1.forMember)(dest => dest.Id, (0, core_1.mapFrom)(src => ValueObjects_1.MovieId.Create(src.Id))), (0, core_1.forMember)(dest => dest.Slot, (0, core_1.mapFrom)(src => ValueObjects_1.MovieSlot.Create(src.Slot))), (0, core_1.forMember)(dest => dest.Localization, (0, core_1.mapFrom)(src => ValueObjects_1.Localization.Create(src.Localization.District, src.Localization.City))), (0, core_1.forMember)(dest => dest.Price, (0, core_1.mapFrom)(src => ValueObjects_1.MoviePrice.Create(src.Price))), (0, core_1.forMember)(dest => dest.Name, (0, core_1.mapFrom)(src => ValueObjects_1.MovieName.Create(src.Name))), (0, core_1.forMember)(dest => dest.Status, (0, core_1.mapFrom)(src => ValueObjects_1.MovieStatus.Create(src.Status))));
        (0, core_1.createMap)(mapper, Commands_1.RemoveMovie, Entities_1.Movie, (0, core_1.forMember)(dest => dest.Id, (0, core_1.mapFrom)(src => ValueObjects_1.MovieId.Create(src.Id))));
        (0, core_1.createMap)(mapper, Entities_1.Movie, DTO_1.MovieReadDto, (0, core_1.forMember)(dest => dest.Id, (0, core_1.mapFrom)(src => src.Id.Guid)), (0, core_1.forMember)(dest => dest.Name, (0, core_1.mapFrom)(src => src.Name.Name)), (0, core_1.forMember)(dest => dest.Status, (0, core_1.mapFrom)(src => src.Status.Status)), (0, core_1.forMember)(dest => dest.Slot, (0, core_1.mapFrom)(src => src.Slot.Slot)), (0, core_1.forMember)(dest => dest.Price, (0, core_1.mapFrom)(src => src.Price.Price)), (0, core_1.forMember)(dest => dest.Localization, (0, core_1.mapFrom)(src => src.Localization)), (0, core_1.forMember)(dest => dest.Actors, (0, core_1.mapFrom)(src => src.Actors)));
    }
}
exports.default = MovieProfile;
