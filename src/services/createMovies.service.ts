import  { AppDataSource }  from "../data-source";
import { TMovie, TMovieRequest } from "../interfaces/movies.interface";
import { Repository } from "typeorm";
import  Movie  from '../entities/movies.entity'


const createMoviesService = async (movieData:TMovieRequest):Promise<TMovie> =>{

    const movieRepository:Repository<TMovie> = AppDataSource.getRepository(Movie)

    const movie:TMovie = movieRepository.create(movieData)
    await movieRepository.save(movie)

    return movie
}

export { createMoviesService }