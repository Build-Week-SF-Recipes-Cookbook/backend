const db=require('./recipes_model');
module.exports={
    validateRecipeBody,
    validateRecipeId,
    validateUpdate
}

async function validateRecipeBody(req,res,next){
    const recipe=req.body;
    if(!recipe || !recipe.title || !recipe.source || !recipe.category){
        res.status(400).json({message: "Please provide title,source and category property"})
    }else {
        //check if recipe exists with the same title
        const recipeWithTitle= await db.findByTitle(recipe.title)
        if(recipeWithTitle){
           res.status(400).json({message: "Recipe title name already exists"}) 
        }else{
            next();
        }
    }
}

async function validateRecipeId(req,res,next){
   const [recipe]= await db.findByRecipeId(req.params.id);
   console.log('recipebyId=',recipe);
   if(!recipe){
       res.status(400).json({message: "invalid Recipe Id"})
   }else{
       next();
   }
}

async function validateUpdate(req,res,next){
    const recipe=req.body;
    if(!recipe || !recipe.title || !recipe.source || !recipe.category){
        res.status(400).json({message: "Please provide title,source and category property"})
    }else{
            next();
        }
}
