import { z } from "zod";
import { movieSchema, movieRequestSchema, moviesResponseSchema } from "../schemas/movies.schemas";
import { DeepPartial } from "typeorm";

type TMovie = z.infer<typeof movieSchema>

type TMovieRequest = z.infer<typeof movieRequestSchema>

type TMoviesResponse = z.infer<typeof moviesResponseSchema>

type TMovieUpdateRequest = DeepPartial<TMovieRequest>


export {TMovie, TMovieRequest, TMoviesResponse, TMovieUpdateRequest }