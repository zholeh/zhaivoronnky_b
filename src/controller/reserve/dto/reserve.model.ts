import { ApiProperty } from "@nestjs/swagger";
import { ReserveId, ReserveSchema, RoomId } from "../../../schema";

export class ReserveModel implements ReserveSchema {
  @ApiProperty({ type: 'integer' })
  readonly id!: ReserveId;

  @ApiProperty({ type: 'integer' })
  readonly roomId!: RoomId;

  @ApiProperty({ type: Boolean })
  readonly state!: boolean;

  @ApiProperty({ type: Date })
  readonly startDate!: Date;

  @ApiProperty({ type: Date })
  readonly endDate!: Date;

  @ApiProperty({ type: Date })
  readonly createdAt!: Date;

  @ApiProperty({ type: Date, nullable: true })
  readonly updatedAt!: Date | null;

  @ApiProperty({ type: Date, nullable: true })
  readonly deletedAt!: Date | null;
}