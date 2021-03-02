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
       const recipe= await dbModel.addIngredientByRecipeId(req.ingredient,recipeId);
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
       const deleted= await dbModel.deleteIngredient(recipeId,ingredientId);
       if (deleted ===1){
            res.status(200).json({message: "delete success"}) 
       }else{
           res.status(400).json({message: "Unable to delete"})
       }       
    } catch (err) {
        next();
    }
})

//edit ingredients for the recipeId
router.put('/:id/:ingredientid', validateRecipeId, validateIngredientId, checkDupIngredient , async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id
    const ingredientId=req.params.ingredientid
    const ingredient=req.body.ingredient
    try {
       const [recipe]= await dbModel.updateIngredient(ingredientId,ingredient,recipeId);
       if(recipe){
        res.status(200).json(recipe) 
       }else{
           res.status(400).json({message: "Unable to update"})
       }
              
    } catch (err) {
        next();
    }
})

module.exports=router;