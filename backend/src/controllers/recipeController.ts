// Handles incoming HTTP requests for recipe operations, invokes services, and sends responses.
import { Request, Response } from 'express'
import { getRecipes } from '../services/recipeService'

export async function getAllRecipes(req: Request, res: Response) {
  const recipes = await getRecipes()
  res.json(recipes)
}
