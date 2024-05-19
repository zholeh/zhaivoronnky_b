import { z } from 'zod';

export const RoomSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedAt: z.date().nullable(),
});
export type RoomSchema = z.infer<typeof RoomSchema>;

export const RoomCreateSchema = RoomSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
export type RoomCreateSchema = z.infer<typeof RoomCreateSchema>;

export const RoomIdSchema = RoomSchema.pick({ id: true });
export type RoomIdSchema = z.infer<typeof RoomIdSchema>;

export const RoomUpdateSchema = RoomCreateSchema.partial().extend(
  RoomIdSchema.shape,
);
export type RoomUpdateSchema = z.infer<typeof RoomUpdateSchema>;
