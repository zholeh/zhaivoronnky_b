import { Field, InputType } from "@nestjs/graphql";
import { ReserveCreateSchema, RoomId } from "../../../schema";

@InputType()
export class ReserveCreate implements ReserveCreateSchema{
  @Field()
  readonly roomId!: RoomId;

  @Field()
  readonly state!: boolean;

  @Field()
  readonly startDate!: Date;

  @Field()
  readonly endDate!: Date;
}