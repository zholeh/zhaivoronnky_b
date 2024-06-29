import { ApiProperty } from "@nestjs/swagger";
import { ReserveId, ReserveUpdateSchema } from "../../../schema";
import { ReserveCreate } from "./reserve.create";

export class ReserveUpdate extends ReserveCreate implements ReserveUpdateSchema {
    @ApiProperty({ type: Number })
    readonly id!: ReserveId;
}