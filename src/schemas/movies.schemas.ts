import { z } from "zod";

const movieSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullish().optional(),
    duration: z.number(),
    price: z.number()
})

const movieRequestSchema = movieSchema.omit({id:true})

export { movieSchema, movieRequestSchema }