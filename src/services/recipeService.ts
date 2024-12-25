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


export async function updateRecipeDB(recipe: Recipe, id: number) {
  const {error } = await supabase
    .from('recipes')
    .update(recipe) // Update the recipe with the new data 
    .eq('id', id) 
    .select() // Return the updated record

  if (error) {
    console.error('Error updating recipe:', error)
    return null
  }

}

export async function deleteRecipeDB(id: number) {
  const {error} = await supabase
  .from('recipes')
  .delete()
  .eq('id', id )

  if (error){
    console.error('Error deleting recipe: ', error)
  }

}