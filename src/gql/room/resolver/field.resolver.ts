import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { RoomModel } from '../dto/room.model';

@Resolver(RoomModel)
export class RoomFieldResolver {
  @ResolveField(() => String)
  description1(@Parent() { description }: RoomModel): string {
    return description.toUpperCase();
  }
}
