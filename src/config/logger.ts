import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  level: z.string(),
  pretty: z.preprocess((arg) => {
    if (typeof arg === 'string') {
      return arg.trim().toLowerCase() === 'true';
    }
    return false;
  }, z.boolean()),
});

export const logger = schema.parse(process.env);
