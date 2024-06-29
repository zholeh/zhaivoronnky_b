import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ReserveId, ReserveUpdateSchema } from "../../schema";
import { ReserveCreate, ReserveModel } from "./dto";
import { ReserveStoreService } from "../../store";

@ApiTags("Reserve")
@Controller("reserve")
export default class ReserveController {
  constructor(private readonly service: ReserveStoreService) {}

  @Get(':id(\\d+)')
  @ApiResponse({ status: 200, type: ReserveModel })
  async findOne(@Param('id', ParseIntPipe) id: ReserveId): Promise<ReserveModel> {
    return this.service.findOneOrFail(id);
  }

  @Get()
  @ApiResponse({ status: 200, type: ReserveModel, isArray: true })
  async findMany(): Promise<ReserveModel[]> {
    return this.service.findMany();
  }

  @Post()
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: ReserveCreate })
  async create(@Body() input: ReserveCreate): Promise<boolean> {
    return this.service.create(input);
  }

  @Put()
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: ReserveCreate })
  async update(@Body() input: ReserveCreate): Promise<boolean> {
    return this.service.update(ReserveUpdateSchema.parse(input));
  }

  @Patch()
  @ApiResponse({ status: 200, type: Boolean })
  @ApiBody({ type: ReserveCreate })
  async partialUpdate(@Body() input: ReserveCreate): Promise<boolean> {
    return this.service.update(ReserveUpdateSchema.parse(input));
  }

  @Delete(':id(\\d+)')
  @ApiResponse({ status: 200, type: Boolean })
  async delete(@Param('id', ParseIntPipe) id: ReserveId): Promise<boolean> {
    return this.service.delete(id);
  }
}
