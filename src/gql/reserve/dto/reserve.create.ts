import { Field, InputType } from "@nestjs/graphql";
import { ReserveCreateSchema } from "../../../schema";

@InputType()
export class ReserveCreate implements ReserveCreateSchema{
  @Field()
  readonly roomId!: number;

  @Field()
  readonly state!: boolean;

  @Field()
  readonly startDate!: Date;

  @Field()
  readonly endDate!: Date;
}