import { z } from 'zod';

const schema = z.object({
  appPort: z.coerce.number().min(3000).max(65535),
  openApi: z.preprocess((arg) => {
    if (typeof arg === 'string') {
      return arg.trim().toLowerCase() === 'true';
    }
    return false;
  }, z.boolean()),
});

export const app = schema.parse(process.env);
