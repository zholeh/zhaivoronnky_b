import { Query, Resolver } from '@nestjs/graphql';
import { RoomQuery } from './room/domain/room.query';
import { ReserveQuery } from './reserve/domain/reserve.query';

@Resolver()
export class MainResolver {
  @Query(() => RoomQuery)
  async room() {
    return true;
  }

  @Query(() => ReserveQuery)
  async reserve() {
    return true;
  }
}
