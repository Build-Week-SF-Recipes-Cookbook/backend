const router=require('express').Router();
const dbModel=require('./recipes_model');
const {validateRecipeBody,validateRecipeId,
validateUpdate} = require('./recipes_middleware');

//find recipe by user id
router.get('/', async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    console.log('userId',userId);
    try {
       const recipes= await dbModel.findByUserId(userId);
       console.log('get recipes',recipes)
       res.status(200).json(recipes)        
    } catch (err) {
        next();
    }
})

//find recipe by recipe id
router.get('/:id', async (req,res,next)=>{
    try {
       const [recipes] = await dbModel.findByRecipeId(req.params.id);
       res.status(200).json(recipes)        
    } catch (err) {
        next();
    }
})


//add recipe
router.post('/', validateRecipeBody, async (req,res,next)=>{
    const userId=req.userId;
    try {
       const [recipe]= await dbModel.createRecipe(req.body,userId);
       res.status(201).json(recipe)        
    } catch (err) {
        next();
    }
})


//edit recipe
router.put('/:id', validateRecipeId, validateUpdate, async (req,res,next)=>{
    const userId=req.userId;
    const recipeId=req.params.id;
    try {
       const recipe= await dbModel.updateRecipe(req.body,recipeId,userId);
       if(recipe){
        res.status(201).json(recipe)  
       }else{
        res.status(400).json({message: "Unable to update"})  
       }
          
    } catch (err) {
        next();
    }
})

//delete recipe by id
router.delete('/:id', validateRecipeId, async (req,res,next)=>{
    const userId=req.userId;
    const recipeId=req.params.id;
    try {
       const deleted= await dbModel.removeRecipe(recipeId,userId);
       if(deleted === 1){
         res.status(200).json({message: "Delete Success"})  
       }else{
           res.status(400).json({message: "Unable to delete recipe"})
       }    
    } catch (err) {
        next();
    }
})

module.exports=router;