import { Args, Int, ResolveField, Resolver } from '@nestjs/graphql';
import { RoomQuery } from '../domain/room.query';
import { RoomStoreService } from '../../../store';
import { RoomId, RoomSchema } from '../../../schema';
import { RoomModel } from '../dto/room.model';

@Resolver(RoomQuery)
export class RoomQueryResolver {
  constructor(private readonly service: RoomStoreService) {}

  @ResolveField(() => RoomModel)
  async findOne(
    @Args('id', { type: () => Int }) id: RoomId,
  ): Promise<RoomSchema> {
    return this.service.findOneOrFail(id);
  }

  @ResolveField(() => [RoomModel])
  async findMany(): Promise<RoomSchema[]> {
    return this.service.findMany();
  }
}
