const dbModel=require('./instructions_model');
const db= require('../../data/dbConfig');

module.exports={validateRecipeId,checkDupInstruction,validateInstructionId}

//validate recipe Id for the user!
async function validateRecipeId(req,res,next){
    const [recipe]= await dbModel.findByRecipeId(req.params.id,req.userId);
    console.log('recipe=',recipe);
    if(!recipe){
        res.status(400).json({message: "invalid Recipe Id"})
    }else{
        next();
    }
 }


 //check if the instruction step number already exists in DB for that recipe id
async function checkDupInstruction(req,res,next){
    const inputStep = req.body.step_number;
    
    //Check if the input step number exists already in the instructions table for this recipe id
    const [sameStep]= await db("instructions")
                            .where("step_number",inputStep)
                            .where("recipe_id",req.params.id)
    console.log('same step=',sameStep);
    if(sameStep){
        res.status(401).json({message: "This instruction step number already added for this recipe"})
    }else{
        next();
    }
}
 
async function validateInstructionId(req,res,next){
    const recipeId=req.params.id;
    const instructionId=req.params.instructionid;
    const [instruction]= await dbModel.findByInstructionId(recipeId,instructionId);
    if(!instruction){
        res.status(400).json({message: "invalid Instruction Id"})
    }else{
        next();
    }
 }
