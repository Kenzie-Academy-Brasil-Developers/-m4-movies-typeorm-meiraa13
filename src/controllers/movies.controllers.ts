import { Request, Response } from "express";
import { TMovieRequest } from "../interfaces/movies.interface";
import { createMoviesService } from "../services/createMovies.service";

const createMoviesController =async (req:Request, res:Response):Promise<Response> => {
    const movieData:TMovieRequest = req.body
    
    const newMovie = await createMoviesService(movieData)

    return res.status(201).json(newMovie)
}


export { createMoviesController }