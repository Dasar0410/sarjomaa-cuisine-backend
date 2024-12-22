// Defines HTTP endpoints related to recipes and maps them to controller functions.
import { Router } from 'express'
import { getAllRecipes } from '../controllers/recipeController'
import { getRecipeById} from '../controllers/recipeController'

const router = Router()

router.get('/', getAllRecipes) // GET /recipes


// Add a new route to get a recipe by its ID by opening this link: http://localhost:8080/recipes/1
router.get('/:id', getRecipeById) // GET /recipes/:id


export default router
