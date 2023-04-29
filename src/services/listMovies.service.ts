import { Repository } from "typeorm"
import { TMoviesResponse } from "../interfaces/movies.interface"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"
import { moviesResponseSchema } from "../schemas/movies.schemas"


const listMoviesService =async (page:any, perPage:any, sort:any, order:any) => {
    const movieRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
    perPage = Number(perPage)
    page = Number(page)
    sort = String(sort)
    order = String(order)

    if(sort !== 'price' && sort !== 'duration'){
        sort = 'id'
        order = 'asc'
    }

    if(order !== 'asc' && order !== 'desc'){
        order = 'asc'
    }
    
    if(!Number.isInteger(perPage) || Number(perPage)<= 0 || Number(perPage)>5){
        perPage = 5
   }

   if(!Number.isInteger(page) || Number(page)<=0){
        page = 1
   }

    
    const movies = await movieRepository.find({
        skip:(page -1) * perPage, 
        take:perPage,
        order:{[sort]:order}
    })

    let count = await movieRepository.count()
     
    const moviesResults:TMoviesResponse = moviesResponseSchema.parse(movies)


    let previousPage: number | null = page-1
    let previousPageUrl:string | null = `http://localhost:3000/movies?page=${previousPage}&perPage=${perPage}`
     if(page ==1){
        previousPageUrl = null
    }

   
    let forwardPage:number | null = page +1
    let forwardPageUrl:string | null = `http://localhost:3000/movies?page=${forwardPage}&perPage=${perPage}`
    if(page > count/perPage){
        forwardPageUrl = null
    }

    return {
        prevPage: previousPageUrl,
        nextPage: forwardPageUrl,
        count:count,
        data:moviesResults
    }
}

export { listMoviesService }