const db=require('../../data/dbConfig');

module.exports={findIngredientsByRecipeId,findByRecipeId,
    addIngredientByRecipeId,findByIngredientId,deleteIngredient,updateIngredient}

async function findByIngredientId(recipeId,ingredientId){
  return await db("ingredients as i")
                .join("recipes as r","r.id","i.recipe_id")
                .where("i.recipe_id",recipeId)
                .where("i.id",ingredientId)
}

async function findIngredientsByRecipeId(recipeId){
    const ingred= await db("ingredients as i")
                    .join("recipes as r","r.id","i.recipe_id")
                    .where("i.recipe_id",recipeId)
                    .select("i.id as ingredient_id",
                            "i.ingredient as ingredient_name",
                            "r.title as recipe_title",
                            "r.source",
                            "r.category",
                            "r.id as recipe_id",
                            )
    return ingred;
  }

  async function findByRecipeId(recipeId,userId){
    return await db("recipes").where("id",recipeId).where("user_id",userId) 
  }

async function addIngredientByRecipeId(ingredient,recipeId){
    //insert into ingredients table
    console.log('ingredient=',ingredient)
    console.log('recipe=',recipeId)
    const newIngredient={recipe_id:recipeId,
                         ingredient: ingredient}
    const [ingId]= await db("ingredients").insert(newIngredient)
    console.log('igId',ingId)
    //select recipe name and its ingredients
    const [recipeName] = await db("recipes as r")
                           .where("id",recipeId)
                           .select("r.title as recipe_name",
                                "r.id as recipe_id")
    const ingredients= await db("ingredients")  
                        .where("recipe_id",recipeId)
                        .select("ingredient")
    console.log('ing=',ingredients);
    const result = {recipe:recipeName,
                    ingredients:ingredients}
    return result;
 
}


async function deleteIngredient(recipeId,ingredientId){
  return await db("ingredients").where("id",ingredientId).del()
}


async function updateIngredient(ingredientId,ingredient,recipeId){
 //update ingredients table
 console.log('ingredient=',ingredient)
 console.log('ingredientId=',ingredientId)
 console.log('recipe=',recipeId)
 
 const updated = await db("ingredients")
                    .update("ingredient",ingredient)
                    .where("id",ingredientId)
                                        
 return findByIngredientId(recipeId,ingredientId)
}