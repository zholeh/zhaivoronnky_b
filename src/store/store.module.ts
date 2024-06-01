import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomStoreService } from './room/room.service';
import { ReserveStoreService } from './reserve/reserve.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'booking',
      logging: true,
    }),
  ],

  providers: [RoomStoreService, ReserveStoreService],
})
export class StoreModule {}
