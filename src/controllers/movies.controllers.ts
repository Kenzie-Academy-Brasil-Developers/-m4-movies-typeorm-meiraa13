import { Request, Response } from "express";
import { TMovieRequest, TMovieUpdateRequest } from "../interfaces/movies.interface";
import { createMoviesService } from "../services/createMovies.service";
import { listMoviesService } from "../services/listMovies.service";
import { updateMovieService } from "../services/updateMovie.service";
import { deleteMovieService } from "../services/deleteMovie.service";

const createMoviesController =async (req:Request, res:Response):Promise<Response> => {
    const movieData:TMovieRequest = req.body
    
    const newMovie = await createMoviesService(movieData)

    return res.status(201).json(newMovie)
}

const listMoviesController = async (req:Request, res:Response):Promise<Response> =>{
    const {page, perPage, sort, order} = req.query

    const movies = await listMoviesService(page, perPage, sort, order)

    return res.json(movies)
}

const updateMovieController =async (req:Request, res:Response):Promise<Response> => {
    const movieData:TMovieUpdateRequest = req.body
    const id: number = Number(req.params.id)

    const updatedMovie = await updateMovieService(movieData, id)

    return res.json(updatedMovie)

}

const deleteMovieController =async (req:Request, res:Response):Promise<Response> => {
        const movieId: number = Number(req.params.id)

        await deleteMovieService(movieId)

        return res.status(204).send()

}

export { createMoviesController, listMoviesController, updateMovieController, deleteMovieController }