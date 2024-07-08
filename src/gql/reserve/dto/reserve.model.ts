import { ReserveId, ReserveSchema, RoomId } from "../../../schema";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ReserveModel implements ReserveSchema {
  @Field()
  readonly id!: ReserveId;

  @Field()
  readonly roomId!: RoomId;

  @Field()
  readonly state!: boolean;

  @Field()
  readonly startDate!: Date;

  @Field()
  readonly endDate!: Date;

  @Field()
  readonly createdAt!: Date;

  @Field(() => Date, { nullable: true })
  readonly updatedAt!: Date | null;

  @Field(() => Date, { nullable: true })
  readonly deletedAt!: Date | null;
}