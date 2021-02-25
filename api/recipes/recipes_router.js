const router=require('express').Router();
const dbModel=require('./recipes_model');

//find recipe by user id
router.get('/', async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    console.log('userId',userId);
    try {
       const recipes= await dbModel.findByUserId(userId);
       res.status(200).json(recipes)        
    } catch (err) {
        next();
    }
})

//find recipe by recipe id
router.get('/:id', async (req,res,next)=>{
    try {
       const recipes= await dbModel.findByRecipeId(req.params.id);
       res.status(200).json(recipes)        
    } catch (err) {
        next();
    }
})


//add recipe
router.post('/', async (req,res,next)=>{
    const userId=req.userId;
    try {
       const [recipe]= await dbModel.createRecipe(req.body,userId);
       res.status(201).json(recipe)        
    } catch (err) {
        next();
    }
})

module.exports=router;