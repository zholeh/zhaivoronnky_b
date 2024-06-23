import { ApiProperty } from '@nestjs/swagger';
import { RoomId, RoomUpdateSchema } from '../../../schema';
import { RoomCreate } from './room.create';

export class RoomUpdate extends RoomCreate implements RoomUpdateSchema {
  @ApiProperty({ type: Number })
  readonly id!: RoomId;
}
