import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { config } from '../config';
import { MainResolver } from './query.resolver';
import { RoomModule } from './room/room.module';
import { MainMutationResolver } from './mutation.resolver';
import { ReserveModule } from './reserve/reserve.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      ...config.graphql,
    }),
    RoomModule,
    ReserveModule
  ],
  providers: [MainResolver, MainMutationResolver],
})
export class GqlModule {}
