import { resolve } from 'path';
import { DataSource } from 'typeorm';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'booking',
  logging: true,
  migrations: [resolve(__dirname, 'migrations/**/*.{ts,js}')],
});
