const router=require('express').Router();
const dbModel=require('./ingredients_model');
const {validateRecipeId, checkDupIngredient,validateIngredientId} = require('./ingredients_middleware');
 

//find ingredients for recipe Id
router.get('/:id', validateRecipeId, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id
    try {
       const ingredients= await dbModel.findIngredientsByRecipeId(recipeId);
       res.status(200).json(ingredients)        
    } catch (err) {
        next();
    }
})

//add ingredients for the recipeId
router.post('/:id', validateRecipeId, checkDupIngredient, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id
    try {
       const recipe= await dbModel.addIngredientsByRecipeId(req.ingredient,recipeId);
       res.status(200).json(recipe)        
    } catch (err) {
        next();
    }
})

//delete ingredient for the recipeId
router.delete('/:id/:ingredientid', validateRecipeId, validateIngredientId, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id;
    const ingredientId=req.params.ingredientid;
    try {
       const deleted= await dbModel.deleteIngredients(recipeId,ingredientId);
       if (deleted ===1){
            res.status(200).json({message: "delete success"}) 
       }else{
           res.status(400).json({message: "Unable to delete"})
       }       
    } catch (err) {
        next();
    }
})


module.exports=router;