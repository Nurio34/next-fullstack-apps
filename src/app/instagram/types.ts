import { z } from "zod";

export const InputsSchema = z.object({
    username: z.string().min(3, {
        message: "Must be at least 3 chars",
    }),
    name: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    surname: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    description: z.optional(
        z.string().max(255, {
            message: "Must be max 255 chars",
        }),
    ),
    city: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    school: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    work: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    website: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    avatar: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
    cover: z.optional(
        z.string().min(3, {
            message: "Must be at least 3 chars",
        }),
    ),
});

export type Inputs = z.infer<typeof InputsSchema>;
