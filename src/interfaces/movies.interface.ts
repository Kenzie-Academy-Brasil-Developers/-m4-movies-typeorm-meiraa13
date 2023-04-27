import { z } from "zod";
import { movieSchema, movieRequestSchema } from "../schemas/movies.schemas";

type TMovie = z.infer<typeof movieSchema>

type TMovieRequest = z.infer<typeof movieRequestSchema>


export {TMovie, TMovieRequest }