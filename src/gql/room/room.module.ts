import { Module } from '@nestjs/common';
import { RoomFieldResolver } from './resolver/field.resolver';
import { RoomQueryResolver } from './resolver/query.resolver';
import { StoreModule } from '../../store/store.module';
import { RoomMutationResolver } from './resolver/mutation.resolver';

@Module({
  imports: [StoreModule],
  providers: [RoomQueryResolver, RoomFieldResolver, RoomMutationResolver],
})
export class RoomModule {}
