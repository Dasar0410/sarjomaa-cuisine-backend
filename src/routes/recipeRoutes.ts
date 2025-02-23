// Defines HTTP endpoints related to recipes and maps them to controller functions.
import { Router } from 'express'
import { getAllRecipes } from '../controllers/recipeController'
import { getRecipeById} from '../controllers/recipeController'
import { addRecipe } from '../controllers/recipeController'
import { updateRecipe } from '../controllers/recipeController'
import { deleteRecipe } from '../controllers/recipeController'
import { getRecipeCard } from '../controllers/recipeController'

const router = Router()

// route to get all recipes
router.get('/', getAllRecipes) // GET /recipes http://localhost:8080/recipes

router.get('/card/:count', getRecipeCard) // GET /recipes/card/:id


// route to get a recipe by its ID by opening this link: http://localhost:8080/recipes/1
router.get('/:id', getRecipeById) // GET /recipes/:id

// route to add a recipe
router.post('/', addRecipe) // POST /recipes

router.put('/:id', updateRecipe) // PUT /recipes/:id

router.delete('/:id', deleteRecipe)
  

export default router
