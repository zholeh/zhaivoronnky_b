import { ApiProperty } from "@nestjs/swagger";
import { ReserveCreateSchema } from "../../../schema";

export class ReserveCreate implements ReserveCreateSchema{
  @ApiProperty({ type: 'integer' })
  readonly roomId!: number;

  @ApiProperty({ type: Boolean })
  readonly state!: boolean;

  @ApiProperty({ type: Date })
  readonly startDate!: Date;

  @ApiProperty({ type: Date })
  readonly endDate!: Date;
}