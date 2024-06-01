import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomStoreService } from './room/room.service';
import { ReserveStoreService } from './reserve/reserve.service';
import { config } from '../config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...config.db,
    }),
  ],

  providers: [RoomStoreService, ReserveStoreService],
})
export class StoreModule {}
