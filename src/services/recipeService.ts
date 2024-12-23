// Contains functions for interacting with the recipes table in the database.
// logic related to fetching or filtering recipes to be added here.

import { supabase } from '../db'
import { Recipe } from '../models/Recipe'

export async function getRecipes(): Promise<Recipe[]> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')

  if (error) {
    console.error('Error fetching recipes:', error)
    return []
  }

  // Return an empty array if no data is returned
  return (data as Recipe[]) || []
}

export async function getRecipeById(id: number): Promise<Recipe | null> {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching recipe:', error)
    return null
  }

  return data as Recipe
}

export async function addRecipe(recipe: Recipe) {
  const { error } = await supabase
    .from('recipes')
    .insert([recipe])

  if (error) {
    console.error('Error adding recipe:', error)
  }
}