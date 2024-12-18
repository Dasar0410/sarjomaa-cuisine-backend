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
