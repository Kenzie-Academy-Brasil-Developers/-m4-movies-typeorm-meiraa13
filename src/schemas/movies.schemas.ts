import { z } from "zod";

const movieSchema = z.object({
    id: z.number(),
    name: z.string().max(50),
    description: z.string().nullish().optional(),
    duration: z.number().gt(0),
    price: z.number().int()
})

const movieRequestSchema = movieSchema.omit({id:true})

const moviesResponseSchema = z.array(movieSchema)

const movieUpdateSchema = movieRequestSchema.deepPartial()

export { movieSchema, movieRequestSchema, moviesResponseSchema, movieUpdateSchema }