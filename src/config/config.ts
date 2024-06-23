import { join } from 'path';
import * as dotenv from 'dotenv';

const folder = join(__dirname, '..', '..', '..');
const envName = process.env.NODE_ENV || 'dev';
const files = [
  `${folder}/.env`,
  `${folder}/.env.${envName}`,
  `${folder}/.env.local.${envName}`,
];

dotenv.config({ path: files, override: true });

import { db } from './db';
import { logger } from './logger';
import { app } from './app';
import { graphql } from './graphql';

export const config = {
  db,
  logger,
  app,
  graphql,
};
