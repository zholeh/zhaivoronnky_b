import { resolve } from 'path';
import { DataSource } from 'typeorm';
import { config } from './src/config';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  logging: config.db.logging,
  migrations: [resolve(__dirname, 'migrations/**/*.{ts,js}')],
});
