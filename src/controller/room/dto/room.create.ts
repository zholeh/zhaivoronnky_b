import { ApiProperty } from '@nestjs/swagger';
import { RoomCreateSchema } from '../../../schema';

export class RoomCreate implements RoomCreateSchema {
  @ApiProperty({ type: String })
  readonly name!: string;

  @ApiProperty({ type: String })
  readonly description!: string;
}
