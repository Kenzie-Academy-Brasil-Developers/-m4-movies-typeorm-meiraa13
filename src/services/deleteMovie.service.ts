import { DeleteResult, Repository } from "typeorm"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"


const deleteMovieService = async (movieId:number):Promise<DeleteResult> => {
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const deleteMovie = await movieRepository.delete(movieId)

    return deleteMovie
}


export { deleteMovieService }