import { z } from 'zod';
import * as dotenv from 'dotenv';
import { join } from 'path';

const folder = join(__dirname, '..', '..', '..');
const envName = process.env.NODE_ENV || 'dev';
const files = [
  `${folder}/.env`,
  `${folder}/.env.${envName}`,
  `${folder}/.env.local.${envName}`,
];

console.log(process.env.NODE_ENV);

dotenv.config({ path: files, override: true });

const schema = z.object({
  host: z.string(),
  port: z.coerce.number().min(3000).max(65535),
  username: z.string(),
  password: z.string(),
  database: z.string(),
  logging: z.preprocess((arg) => {
    if (typeof arg === 'string') {
      return arg.trim().toLowerCase() === 'true';
    }
    return false;
  }, z.boolean()),
});

export const db = schema.parse(process.env);
