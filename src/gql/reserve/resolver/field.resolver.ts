import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ReserveModel } from '../dto/reserve.model';

@Resolver(ReserveModel)
export class ReserveFieldResolver {
  @ResolveField(() => String)
  stateResolver(@Parent() { state }: ReserveModel): boolean {
    return state;
  }
}
