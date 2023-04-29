import { Router } from "express";
import { createMoviesController, deleteMovieController, listMoviesController, updateMovieController } from "../controllers/movies.controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { movieRequestSchema, movieUpdateSchema } from "../schemas/movies.schemas";
import { ensureIdExistsMiddleware } from "../middlewares/ensureIdExists.middleware";
import { ensureUpdatedNameExistsMiddleware } from "../middlewares/ensureUpdatedNameExists.middleware";

const movieRoutes:Router = Router()

movieRoutes.post('', ensureDataIsValidMiddleware(movieRequestSchema),ensureUpdatedNameExistsMiddleware, createMoviesController)
movieRoutes.get('', listMoviesController)
movieRoutes.patch('/:id',ensureDataIsValidMiddleware(movieUpdateSchema),ensureIdExistsMiddleware,ensureUpdatedNameExistsMiddleware,updateMovieController)
movieRoutes.delete('/:id', ensureIdExistsMiddleware, deleteMovieController)

export { movieRoutes }