import { NextFunction, Request, Response } from "express"
import { TMovie, TMovieRequest } from "../interfaces/movies.interface"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { AppError } from "../error"

const ensureIdExistsMiddleware = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> =>{
    const dataId:number = Number(req.params.id)

    const movieRepository:Repository<TMovie> = AppDataSource.getRepository(Movie)

    const movie: TMovie | null = await movieRepository.findOne({
        where:{
            id:dataId
        }
    })

    if(!movie){
        throw new AppError('Movie not found', 404)
    }

    return next()
}

export { ensureIdExistsMiddleware }