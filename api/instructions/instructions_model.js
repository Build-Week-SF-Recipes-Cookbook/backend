const db=require('../../data/dbConfig');

module.exports={findInstructionsByRecipeId,findByRecipeId,addInstructionByRecipeId,deleteInstruction,findByInstructionId,updateInstruction}

async function findByInstructionId(recipeId,instructionId){
    return await db("instructions as i")
                  .join("recipes as r","r.id","i.recipe_id")
                  .where("i.recipe_id",recipeId)
                  .where("i.id",instructionId)
  }

async function findByRecipeId(recipeId,userId){
    return await db("recipes").where("id",recipeId).where("user_id",userId) 
}


async function findInstructionsByRecipeId(recipeId){
    const ins= await db("instructions as i")
                    .join("recipes as r","r.id","i.recipe_id")
                    .where("i.recipe_id",recipeId)
                    .select("i.id as instruction_id",
                            "i.step_number",
                            "i.instruction",
                            "r.id as recipe_id",
                            "r.title",
                            "r.source",
                            "r.category",
                            )
                    .orderBy("i.step_number")

    console.log('ins=',ins)
    return ins;
  }

  async function addInstructionByRecipeId(instruction,recipeId){
    //insert into instructions table
    console.log('ins=',instruction)
    console.log('recipe=',recipeId)
    const newInstruction={recipe_id:recipeId,
                          ...instruction}

    console.log('newInstruction=',newInstruction)
    const [insId]= await db("instructions").insert(newInstruction)
    console.log('insId',insId)
    //select recipe name and its instructions
    const [recipeName] = await db("recipes as r")
                           .where("id",recipeId)
                           .select("r.title as recipe_name",
                                "r.id as recipe_id")
    const instructions= await db("instructions as i")  
                        .where("recipe_id",recipeId)
                        .select("i.step_number","i.instruction")
                        .orderBy("i.step_number")

    const result = {recipe:recipeName,
                    instructions:instructions}
    return result;
}

async function deleteInstruction(recipeId,instructionId){
    return await db("instructions").where("id",instructionId).del()
  }

  async function updateInstruction(instructionId,instruction,recipeId){
    //update instructions table
    console.log('ins=',instruction)
    console.log('insId=',instructionId)
    console.log('recipe=',recipeId)
    const updatedIns={recipe_id:recipeId,
                      step_number:instruction.step_number,
                      instruction:instruction.instruction}
    const updated = await db("instructions")
                       .update(updatedIns)
                       .where("id",instructionId)
    console.log('updated=',updated);

    return findByInstructionId(recipeId,instructionId)
   }