const db=require('../../data/dbConfig');

module.exports={findRecipes,findByRecipeId,findByUserId,createRecipe}

async function findRecipes(){
  return await db("recipes") 
}

async function findByRecipeId(recipeId){
    return await db("recipes").where("id",recipeId) 
  }

async function findByUserId(userId){
    return await db("recipes").where("user_id",userId) 
}

async function createRecipe(recipe,userId){
    const addRecipe={...recipe,
                    user_id:userId}
    const recipeId= await db("recipes").insert(addRecipe);
    const newRecipe= await findByRecipeId(recipeId);
    console.log('recipe created:',newRecipe)
    return newRecipe;
}