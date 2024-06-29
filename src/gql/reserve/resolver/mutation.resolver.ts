import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { ReserveCreateSchema, ReserveUpdateSchema } from '../../../schema';
import { ReserveStoreService } from '../../../store';
import { ReserveMutation } from '../domain/reserve.mutation';
import { ReserveCreate } from '../dto/reserve.create';
import { ReserveUpdate } from '../dto/reserve.update';

@Resolver(ReserveMutation)
export class ReserveMutationResolver {
  constructor(private readonly service: ReserveStoreService) {}

  @ResolveField(() => Boolean)
  async create(@Args('input') input: ReserveCreate): Promise<boolean> {
    return this.service.create(ReserveCreateSchema.parse(input));
  }

  @ResolveField(() => Boolean)
  async update(@Args('input') input: ReserveUpdate): Promise<boolean> {
    return this.service.update(ReserveUpdateSchema.parse(input));
  }

  @ResolveField(() => Boolean)
  async partialUpdate(@Args('input') input: ReserveUpdate): Promise<boolean> {
    return this.service.update(ReserveUpdateSchema.parse(input));
  }

  @ResolveField(() => Boolean)
  async delete(@Args('id') id: number): Promise<boolean> {
    return this.service.delete(id);
  }
}
