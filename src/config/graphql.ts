import { z } from 'zod';

const schema = z.object({
  path: z.string().default('graphql'),
  playground: z.preprocess((arg) => {
    if (typeof arg === 'string') {
      return arg.trim().toLowerCase() === 'true';
    }
    return false;
  }, z.boolean()),
});

export const graphql = schema.parse(process.env);
