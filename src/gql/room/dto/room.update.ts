import { RoomId, RoomUpdateSchema } from '../../../schema';
import { RoomCreate } from './room.create';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoomUpdate extends RoomCreate implements RoomUpdateSchema {
  @Field()
  readonly id!: RoomId;
}
