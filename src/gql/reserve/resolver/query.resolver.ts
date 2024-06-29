import { Args, Int, ResolveField, Resolver } from '@nestjs/graphql';
import { ReserveId, ReserveSchema } from '../../../schema';
import { ReserveStoreService } from '../../../store';
import { ReserveQuery } from '../domain/reserve.query';
import { ReserveModel } from '../dto/reserve.model';

@Resolver(ReserveQuery)
export class ReserveQueryResolver {
  constructor(private readonly service: ReserveStoreService) {}

  @ResolveField(() => ReserveModel)
  async findOne(
    @Args('id', { type: () => Int }) id: ReserveId,
  ): Promise<ReserveSchema> {
    return this.service.findOneOrFail(id);
  }

  @ResolveField(() => [ReserveModel])
  async findMany(): Promise<ReserveSchema[]> {
    return this.service.findMany();
  }
}
