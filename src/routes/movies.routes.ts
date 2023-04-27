import { Router } from "express";
import { createMoviesController } from "../controllers/movies.controllers";

const movieRoutes:Router = Router()

movieRoutes.post('', createMoviesController)

export { movieRoutes }