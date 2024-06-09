import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoomStoreService } from '../../store/room/room.service';
import { RoomCreateSchema, RoomSchema, RoomUpdateSchema } from '../../schema';
import { RoomModel } from './dto/room.model';
import { RoomCreate } from './dto/room.create';
import { RoomUpdate } from './dto/room.update';

@ApiTags('Room')
@Controller('room')
export class RoomController {
  constructor(private readonly service: RoomStoreService) {}

  @Get(':id(\\d+)')
  @ApiResponse({ status: 200, type: RoomModel })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<RoomModel> {
    return this.service.findOneOrFail(id);
  }

  @Get()
  @ApiResponse({ status: 200, type: RoomModel, isArray: true })
  async findMany(): Promise<RoomSchema[]> {
    return this.service.findMany();
  }

  @Post()
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: RoomCreate })
  async create(@Body() input: RoomCreate): Promise<boolean> {
    return this.service.create(RoomCreateSchema.parse(input));
  }

  @Put()
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: RoomUpdate })
  async update(@Body() input: RoomUpdate): Promise<boolean> {
    return this.service.update(RoomUpdateSchema.parse(input));
  }

  @Patch()
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: RoomUpdate })
  async partialUpdate(@Body() input: RoomUpdate): Promise<boolean> {
    return this.service.update(RoomUpdateSchema.parse(input));
  }

  @Delete(':id(\\d+)')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
    return this.service.delete(id);
  }
}
