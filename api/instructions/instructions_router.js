const router=require('express').Router();
const dbModel=require('./instructions_model');
const {validateRecipeId,checkDupInstruction,validateInstructionId} = require('./instructions_middleware');

//find instructions for recipe Id
router.get('/:id', validateRecipeId, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id
    try {
       const instructions= await dbModel.findInstructionsByRecipeId(recipeId);
       res.status(200).json(instructions)        
    } catch (err) {
        next();
    }
})

//add instructions for the recipeId
router.post('/:id', validateRecipeId, checkDupInstruction, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id
    const instruction= req.body;
    try {
       const recipe= await dbModel.addInstructionByRecipeId(instruction,recipeId);
       res.status(200).json(recipe)        
    } catch (err) {
        next();
    }
})

//delete instruction for the recipeId
router.delete('/:id/:instructionid', validateRecipeId, validateInstructionId, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id;
    const instructionId=req.params.instructionid;
    try {
       const deleted= await dbModel.deleteInstruction(recipeId,instructionId);
       if (deleted ===1){
            res.status(200).json({message: "delete success"}) 
       }else{
           res.status(400).json({message: "Unable to delete"})
       }       
    } catch (err) {
        next();
    }
})

//edit instruction for the recipeId
router.put('/:id/:instructionid', validateRecipeId, validateInstructionId, async (req,res,next)=>{
    const userId=req.userId; //value grabbed from decodedToken
    const recipeId=req.params.id
    const instructionId=req.params.instructionid
    const instruction=req.body
    try {
       const [recipe]= await dbModel.updateInstruction(instructionId,instruction,recipeId);
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