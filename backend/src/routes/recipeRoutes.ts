// Defines HTTP endpoints related to recipes and maps them to controller functions.
import { Router } from 'express'
import { getAllRecipes } from '../controllers/recipeController'

const router = Router()

router.get('/', getAllRecipes) // GET /recipes

export default router
