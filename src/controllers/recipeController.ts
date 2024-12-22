// Handles incoming HTTP requests for recipe operations, invokes services, and sends responses.
import { Request, Response } from 'express'
import { getRecipes, getRecipeById as getRecipeByIdService } from '../services/recipeService'

export async function getAllRecipes(req: Request, res: Response) {
  const recipes = await getRecipes()
  res.json(recipes)
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
