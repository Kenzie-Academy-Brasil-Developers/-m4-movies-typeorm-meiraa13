import { Repository } from "typeorm"
import { TMovie, TMovieRequest, TMovieUpdateRequest } from "../interfaces/movies.interface"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"


const updateMovieService =async (movieData:TMovieUpdateRequest, movieId:number):Promise<TMovie> => {
    
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)

    const currentMovie:Movie | null = await movieRepository.findOneBy({
        id:movieId
    })

    const updatedMovie:TMovie = movieRepository.create({
        ...currentMovie,
        ...movieData
    })

    await movieRepository.save(updatedMovie)

    return updatedMovie

}

export { updateMovieService }