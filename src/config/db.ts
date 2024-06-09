import { z } from 'zod';

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
