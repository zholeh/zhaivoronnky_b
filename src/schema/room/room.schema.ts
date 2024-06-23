import { z } from 'zod';

export const RoomId = z.number().brand('RoomId');
export type RoomId = z.infer<typeof RoomId>;

export const Room2Id = z.number().brand('Room2Id');
export type Room2Id = z.infer<typeof RoomId>;

export const RoomSchema = z.object({
  id: RoomId,
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedAt: z.date().nullable(),
});
export type RoomSchema = z.infer<typeof RoomSchema>;

export const Room2Schema = z.object({
  id: Room2Id,
  name: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().nullable(),
  deletedAt: z.date().nullable(),
});
export type Room2Schema = z.infer<typeof RoomSchema>;

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
