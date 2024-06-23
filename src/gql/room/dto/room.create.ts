import { RoomCreateSchema } from '../../../schema';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoomCreate implements RoomCreateSchema {
  @Field()
  readonly name!: string;

  @Field()
  readonly description!: string;
}
