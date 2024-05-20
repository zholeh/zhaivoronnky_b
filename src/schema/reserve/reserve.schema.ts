import { z } from "zod";

export const ReserveSchema = z.object({
  id: z.number(),
  roomId: z.number(),
  state: z.boolean(),
  startDate: z.date(),
  endDate: z.date(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().nullable(),
  deletedAt: z.date().nullable(),
});
export type ReserveSchema = z.infer<typeof ReserveSchema>;

export const ReserveCreateSchema = ReserveSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
export type ReserveCreateSchema = z.infer<typeof ReserveCreateSchema>;

export const ReserveIdSchema = ReserveSchema.pick({ id: true });
export type ReserveIdSchema = z.infer<typeof ReserveIdSchema>;

export const ReserveUpdateSchema = ReserveCreateSchema.partial().extend(
  ReserveIdSchema.shape,
);
export type ReserveUpdateSchema = z.infer<typeof ReserveUpdateSchema>;