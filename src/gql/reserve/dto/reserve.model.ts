import { ReserveId, ReserveSchema } from "../../../schema";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ReserveModel implements ReserveSchema {
  @Field()
  readonly id!: ReserveId;

  @Field()
  readonly roomId!: number;

  @Field()
  readonly state!: boolean;

  @Field()
  readonly startDate!: Date;

  @Field()
  readonly endDate!: Date;

  @Field()
  readonly createdAt!: Date;

  @Field()
  readonly updatedAt!: Date | null;

  @Field()
  readonly deletedAt!: Date | null;
}