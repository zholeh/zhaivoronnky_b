import { Injectable } from '@nestjs/common';
import {
  RoomCreateSchema,
  RoomId,
  RoomSchema,
  RoomUpdateSchema,
} from '../../schema';

import { DataSource } from 'typeorm';
import { Store } from '../store.abstract';

@Injectable()
export class RoomStoreService extends Store<
  typeof RoomSchema,
  RoomId,
  typeof RoomCreateSchema,
  typeof RoomUpdateSchema
> {
  protected CreateSchema = RoomCreateSchema;
  protected Schema = RoomSchema;
  protected UpdateSchema = RoomUpdateSchema;
  protected table = 'room';
  constructor(protected readonly dataSource: DataSource) {
    super(dataSource);
  }
}
