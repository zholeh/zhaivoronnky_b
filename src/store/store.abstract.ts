import { DataSource } from 'typeorm';
import { transformObjectKeys } from '../helper';
import {
  TypeOf,
  ZodBranded,
  ZodNumber,
  ZodObject,
  ZodRawShape,
  ZodTypeAny,
} from 'zod';

type ZodEntityWithId = ZodObject<
  {
    [k: string]: ZodTypeAny;
  } & { id: ZodBranded<ZodNumber, string> }
>;

export abstract class Store<
  Entity extends ZodEntityWithId,
  CreateEntity extends ZodObject<ZodRawShape>,
  UpdateEntity extends ZodObject<ZodRawShape>,
> {
  constructor(protected readonly dataSource: DataSource) {}

  protected abstract table: string;
  protected abstract Schema: Entity;

  async findOne(id: TypeOf<Entity>['id']): Promise<TypeOf<Entity> | undefined> {
    const result = await this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(this.table, this.table)
      .where('id = :id', { id })
      .andWhere('deleted_at IS NULL')
      .getRawOne();

    if (!result) return undefined;
    return this.Schema.parse(transformObjectKeys(result).toCamel());
  }

  async findOneOrFail(id: TypeOf<Entity>['id']): Promise<TypeOf<Entity>> {
    const result = await this.findOne(id);

    if (!result) throw new Error(`Room with id ${id} }not found`);
    return result;
  }

  async findMany(): Promise<TypeOf<Entity>[]> {
    const result = await this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(this.table, this.table)
      .where('deleted_at IS NULL')
      .getRawMany();

    return result.map((item) =>
      this.Schema.parse(transformObjectKeys(item).toCamel()),
    );
  }

  async create(input: TypeOf<CreateEntity>): Promise<boolean> {
    const data = transformObjectKeys(input).toSnake();
    await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(this.table)
      .values(data)
      .execute();

    return true;
  }

  async update(input: TypeOf<UpdateEntity>): Promise<boolean> {
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

    return true;
  }

  async delete(id: number): Promise<boolean> {
    await this.dataSource
      .createQueryBuilder()
      .update(this.table)
      .set({ deleted_at: new Date() })
      .where('id = :id', { id })
      .execute();

    return true;
  }

  async hardDelete(id: number): Promise<boolean> {
    await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(this.table)
      .where('id = :id', { id })
      .execute();

    return true;
  }
}
