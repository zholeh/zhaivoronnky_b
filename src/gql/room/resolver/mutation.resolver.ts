import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { RoomCreateSchema, RoomUpdateSchema } from '../../../schema';
import { RoomStoreService } from '../../../store';
import { RoomMutation } from '../domain/room.mutation';
import { RoomCreate } from '../dto/room.create';
import { RoomUpdate } from '../dto/room.update';

@Resolver(RoomMutation)
export class RoomMutationResolver {
  constructor(private readonly service: RoomStoreService) {}

  @ResolveField(() => Boolean)
  async create(@Args('input') input: RoomCreate): Promise<boolean> {
    return this.service.create(RoomCreateSchema.parse(input));
  }

  @ResolveField(() => Boolean)
  async update(@Args('input') input: RoomUpdate): Promise<boolean> {
    return this.service.update(RoomUpdateSchema.parse(input));
  }

  @ResolveField(() => Boolean)
  async partialUpdate(@Args('input') input: RoomUpdate): Promise<boolean> {
    return this.service.update(RoomUpdateSchema.parse(input));
  }

  @ResolveField(() => Boolean)
  async delete(@Args('id') id: number): Promise<boolean> {
    return this.service.delete(id);
  }
}
