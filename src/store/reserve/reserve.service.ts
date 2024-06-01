import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import {
  ReserveCreateSchema,
  ReserveSchema,
  ReserveUpdateSchema,
} from '../../schema';
import { Store } from '../store.abstract';

@Injectable()
export class ReserveStoreService extends Store<
  typeof ReserveSchema,
  typeof ReserveCreateSchema,
  typeof ReserveUpdateSchema
> {
  protected Schema = ReserveSchema;
  protected table = 'reserve';
  constructor(dataSource: DataSource) {
    super(dataSource);
  }
}
