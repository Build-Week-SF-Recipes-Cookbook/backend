const db=require('../../data/dbConfig');

module.exports={findRecipes,findByRecipeId,findByUserId,createRecipe,findByTitle,removeRecipe,updateRecipe}

async function findRecipes(){
  return await db("recipes") 
}

async function findByRecipeId(recipeId){
    return await db("recipes").where("id",recipeId) 
  }

async function findByUserId(userId){
    const adminId=1; //set as config env var to return default recipe
    return await db("recipes").where("user_id",userId)
                            //   .orWhere ("user_id", adminId) 
}

async function findByTitle(userId,title){
    console.log('title in mode',title)
    const recipeWithTitle= await db("recipes as r")
                                .where("r.title", title)
                                .andWhere("user_id",userId)
    console.log('recipeWithTitle',recipeWithTitle)
    return recipeWithTitle;
}

async function createRecipe(recipe,userId){
    const addRecipe={...recipe,
                    user_id:userId}
    const [recipeId]= await db("recipes").insert(addRecipe);
    const newRecipe= await findByRecipeId(recipeId);
    console.log('recipe created:',newRecipe)
    return newRecipe;
}

 async function updateRecipe(recipe,recipeId,userId){
    console.log('user Id=',userId)
    console.log('recipe in updateR=',recipe)
    const updated= await db("recipes as r")
                .where("r.id",recipeId)
                .andWhere("r.user_id",userId)
                .first()
                .update(recipe);
    const [updatedRecipe]= await findByRecipeId(recipeId);
    console.log('recipe updated:',updated)
    return updatedRecipe
}

async function removeRecipe(recipeId,userId){
    console.log('recipeId=',recipeId)
    console.log('userId',userId)
    const deleted= await db("recipes as r")
                  .where("id",recipeId)
                  .join("users as u",'u.id',recipeId)
                  .del();
    console.log('deleted=',deleted)
    return deleted;
}