// Handles incoming HTTP requests for recipe operations, invokes services, and sends responses.
import { Request, Response } from 'express'
import { getRecipes, getRecipeById as getRecipeByIdService, addRecipe as addRecipeService, updateRecipeDB as updateRecipeService } from '../services/recipeService'

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

// adds a recipe by calling the addRecipeService function
export async function addRecipe(req: Request, res: Response) {
  const recipe = req.body
  await addRecipeService(recipe)
  console.log(recipe)
  
  // check if recipe is added by checking if the recipe object is not empty
  if (recipe) {
    res.status(201).json({ message: 'Recipe added successfully' })
  } else {
    res.status(500).json({ message: 'Error adding recipe' })
  }

}

export async function updateRecipe(req: Request, res: Response) {
  const recipe = req.body
  await updateRecipeService(recipe)
  console.log(recipe)
  res.json({ message: 'Recipe updated successfully' })
}
