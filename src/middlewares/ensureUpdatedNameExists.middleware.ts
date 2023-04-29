import { NextFunction, Request, Response } from "express"
import { TMovie, TMovieRequest } from "../interfaces/movies.interface"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { AppError } from "../error"

const ensureUpdatedNameExistsMiddleware = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> =>{
    const movieData:TMovieRequest = req.body

    const movieRepository:Repository<TMovie> = AppDataSource.getRepository(Movie)

    const movie: TMovie | null = await movieRepository.findOne({
        where:{
            name: movieData.name
        }
    })

    if(movie?.name === movieData.name){
        throw new AppError('Movie already exists.', 409)
    }

    return next()
}

export {ensureUpdatedNameExistsMiddleware }