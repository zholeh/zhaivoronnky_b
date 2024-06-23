import { ApiProperty } from '@nestjs/swagger';
import { RoomSchema, RoomId } from '../../../schema';

export class RoomModel implements RoomSchema {
  @ApiProperty({ type: 'integer' })
  readonly id!: RoomId;

  @ApiProperty({ type: String })
  readonly name!: string;

  @ApiProperty({ type: String })
  readonly description!: string;

  @ApiProperty({ type: Date })
  readonly createdAt!: Date;

  @ApiProperty({ type: Date, nullable: true })
  readonly updatedAt!: Date | null;

  @ApiProperty({ type: Date, nullable: true })
  readonly deletedAt!: Date | null;
}
