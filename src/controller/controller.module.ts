import { Module } from '@nestjs/common';
import { RoomController } from './room';
import { StoreModule } from '../store/store.module';

@Module({
  imports: [StoreModule],
  controllers: [RoomController],
})
export class ControllerModule {}
