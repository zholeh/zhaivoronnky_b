import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config';
import { RoomStoreService } from './room';
import { ReserveStoreService } from './reserve';

const providers = [RoomStoreService, ReserveStoreService];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...config.db,
    }),
  ],

  providers: providers,
  exports: providers,
})
export class StoreModule {}
