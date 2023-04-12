import { ICommandHandler } from "@Shared/Commands";
import { AddActorToMovie } from "@Application/Commands";
import { IActorRepo, IMovieRepo } from "@Domain/Repositories";
import { IMovieFactory } from "@Domain/Factories";
import { AutoMapper } from "@Shared/AutoMapper";
import { IPublisher } from "@Shared/Broker";
export declare type IAddActorToMovieHandler = ICommandHandler<AddActorToMovie>;
export default class AddActorToMovieHandler implements IAddActorToMovieHandler {
    private readonly _movieRepo;
    private readonly _movieFactory;
    private readonly _actorRepo;
    private readonly _mapper;
    private readonly _publisher;
    /**
     * constructor
     */
    constructor(movieRepo: IMovieRepo, actorRepo: IActorRepo, movieFactory: IMovieFactory, mapper: AutoMapper, publisher: IPublisher);
    HandleAsync(command: AddActorToMovie): Promise<any>;
}
//# sourceMappingURL=AddActorToMovieHandler.d.ts.map