import { Mutation, Resolver } from '@nestjs/graphql';
import { RoomMutation } from './room/domain/room.mutation';
import { ReserveMutation } from './reserve/domain/reserve.mutation';

@Resolver()
export class MainMutationResolver {
  @Mutation(() => RoomMutation)
  async room() {
    return true;
  }

  @Mutation(() => ReserveMutation)
  async reserve() {
    return true;
  }
}
