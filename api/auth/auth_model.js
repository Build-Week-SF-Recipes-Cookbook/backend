const db=require('../../data/dbConfig');

module.exports={addUser,findByUserName}

async function addUser(user){
   const userId= await db("users").insert(user)
   return findByUserId(userId)
}

async function findByUserId(userId){
    const user= await db("users").where("id",userId).first();
    return user 
 }

async function findByUserName(username){
    const user= await db("users").where("username",username).first();
    return user 
 }