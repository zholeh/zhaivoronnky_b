import { ReserveId, ReserveUpdateSchema } from "../../../schema";
import { ReserveCreate } from "./reserve.create";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ReserveUpdate extends ReserveCreate implements ReserveUpdateSchema {
    @Field()
    readonly id!: ReserveId;
}