import { Mutation, Resolver } from '@nestjs/graphql';
import { RoomMutation } from './room/domain/room.mutation';

@Resolver()
export class MainMutationResolver {
  @Mutation(() => RoomMutation)
  async room() {
    return true;
  }
}
