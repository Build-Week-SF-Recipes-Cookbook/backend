const dbModel=require('./ingredients_model');
const db= require('../../data/dbConfig');

module.exports={validateRecipeId,checkDupIngredient,validateIngredientId}

//validate recipe Id for the user!
async function validateRecipeId(req,res,next){
    const [recipe]= await dbModel.findByRecipeId(req.params.id,req.userId);
    if(!recipe){
        res.status(400).json({message: "invalid Recipe Id"})
    }else{
        next();
    }
 }

 async function validateIngredientId(req,res,next){
    const recipeId=req.params.id;
    const ingredientId=req.params.ingredientid;
    const [ingredient]= await dbModel.findByIngredientId(recipeId,ingredientId);
    if(!ingredient){
        res.status(400).json({message: "invalid Ingredient Id"})
    }else{
        next();
    }
 }

//check if the ingredient already exists in DB for that recipe id
async function checkDupIngredient(req,res,next){
    const inputIngredient = req.body.ingredient.toLowerCase();
    
    //Check if the input ingredient exists already in the ingredients table
    //for this recipe id
    const [sameIngredient]= await db("ingredients")
                            .where("ingredient",inputIngredient)
                            .where("recipe_id",req.params.id)
    console.log('same ing=',sameIngredient);
    if(sameIngredient){
        res.status(401).json({message: "This ingredient already added for this recipe"})
    }else{
        req.ingredient=inputIngredient;
        next();
    }
}
 