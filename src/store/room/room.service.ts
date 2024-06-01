import { Injectable } from '@nestjs/common';
import { RoomCreateSchema, RoomSchema, RoomUpdateSchema } from '../../schema';

import { DataSource } from 'typeorm';
import { Store } from '../store.abstract';

@Injectable()
export class RoomStoreService extends Store<
  typeof RoomSchema,
  typeof RoomCreateSchema,
  typeof RoomUpdateSchema
> {
  protected CreateSchema = RoomCreateSchema;
  protected Schema = RoomSchema;
  protected UpdateSchema = RoomUpdateSchema;
  protected table = 'room';
  constructor(dataSource: DataSource) {
    super(dataSource);
    this.findOne(1).then((result) => {
      console.log(result);
    });
  }
}
