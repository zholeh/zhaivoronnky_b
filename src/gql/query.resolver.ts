import { Query, Resolver } from '@nestjs/graphql';
import { RoomQuery } from './room/domain/room.query';

@Resolver()
export class MainResolver {
  @Query(() => RoomQuery)
  async room() {
    return true;
  }
}
