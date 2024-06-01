import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ReserveSchema } from '../../schema';
import { transformObjectKeys } from '../../helper';

@Injectable()
export class ReserveStoreService {
  private table = 'reserve';
  private roomTable = 'room';
  constructor(private readonly dataSource: DataSource) {}

  async findOne(id: number): Promise<any | undefined> {
    const result = await this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(this.table, this.table)
      .where('id = :id', { id })
      .andWhere('deleted_at IS NULL')
      .getRawOne();

    if (!result) return undefined;
    return ReserveSchema.parse(transformObjectKeys(result).toCamel());
  }

  async findOneOrFail(id: number): Promise<any> {
    const result = await this.findOne(id);

    if (!result) throw new Error(`Reserve with id ${id} not found`);
    return ReserveSchema.parse(transformObjectKeys(result).toCamel());
  }

  async findMany(): Promise<any[]> {
    const result = await this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(this.table, this.table)
      .where('deleted_at IS NULL')
      .getRawMany();

    return result.map((item) =>
      ReserveSchema.parse(transformObjectKeys(item).toCamel()),
    );
  }

  async create(input: any) {
    const data = transformObjectKeys(input).toSnake();
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(this.table)
      .values(data)
      .execute();

    return true;
  }

  async update(input: any) {
    const data = transformObjectKeys({
      ...input,
      updatedAt: new Date(),
    }).toSnake();

    await this.dataSource
      .createQueryBuilder()
      .update(this.table)
      .set(data)
      .where('id = :id', { id: input.id })
      .execute();
  }

  async delete(id: number) {
    await this.dataSource
      .createQueryBuilder()
      .update(this.table)
      .set({ deleted_at: new Date() })
      .where('id = :id', { id })
      .execute();

    return true;
  }

  async hardDelete(id: number) {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(this.table)
      .where('id = :id', { id })
      .execute();

    return true;
  }
}
