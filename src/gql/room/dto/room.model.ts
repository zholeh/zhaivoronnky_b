import { RoomId, RoomSchema } from '../../../schema';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RoomModel implements RoomSchema {
  @Field(() => Int)
  readonly id!: RoomId;

  @Field()
  readonly name!: string;

  @Field()
  readonly description!: string;

  @Field()
  readonly createdAt!: Date;

  @Field(() => Date, { nullable: true })
  readonly updatedAt!: Date | null;

  @Field(() => Date, { nullable: true })
  readonly deletedAt!: Date | null;
}
