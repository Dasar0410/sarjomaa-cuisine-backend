// Handles incoming HTTP requests for recipe operations, invokes services, and sends responses.
import { Request, Response } from 'express'
import { getRecipes, getRecipeById as getRecipeByIdService, addRecipe as addRecipeService, updateRecipeDB as updateRecipeService, deleteRecipeDB,} from '../services/recipeService'
import { getRecipeCardDB } from '../services/recipeService'

export async function getAllRecipes(req: Request, res: Response) {
  const recipes = await getRecipes()
  res.json(recipes)
  // add some response if no recipes
}

export async function getRecipeById(req: Request, res: Response) {
  const id = parseInt(req.params.id)
  const recipe = await getRecipeByIdService(id)

  if (recipe) {
    res.json(recipe)
  } else {
    res.status(404).json({ message: 'Recipe not found' })
  }
}

// takes count provided in path and return the newest recipes up to the given count.
export async function getRecipeCard(req: Request, res: Response) {
  const count = parseInt(req.params.count)
  const recipe = await getRecipeCardDB(count)

  if (recipe) {
    res.json(recipe)
  } else {
    res.status(404).json({ message: 'Recipe not found' })
  }
}

// adds a recipe by calling the addRecipeService function
export async function addRecipe(req: Request, res: Response) {
  const recipe = req.body
  console.log(recipe)
  await addRecipeService(recipe)
  
  
  // check if recipe is added by checking if the recipe object is not empty
  if (recipe) {
    res.status(201).json({ message: 'Recipe added successfully' })
  } else {
    res.status(500).json({ message: 'Error adding recipe' })
  }

}

export async function updateRecipe(req: Request, res: Response) {
  const id = parseInt(req.params.id)
  const recipe = req.body
  console.log(recipe)
  await updateRecipeService(recipe, id)
 
  res.json({ message: 'Recipe updated successfully' })
}

export async function deleteRecipe(req: Request, res: Response) {
  const id = parseInt(req.params.id)
  const recipe = await deleteRecipeDB(id)
  res.json({ message: 'Recipe deleted successfully'})
}

