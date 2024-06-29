import { Module } from '@nestjs/common';
import { RoomController } from './room';
import { StoreModule } from '../store/store.module';
import ReserveController from './reserve/reserve.controller';

@Module({
  imports: [StoreModule],
  controllers: [RoomController, ReserveController],
})
export class ControllerModule {}
