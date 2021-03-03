const db=require('../../data/dbConfig');

module.exports={addUser,findByUserName}

async function addUser(user){
   const [userId]= await db("users").insert(user)
   const newUser= await findByUserId(userId)
   return newUser;
}

async function findByUserId(userId){
    const [user]= await db("users").where("id",userId);
    return user 
 }

async function findByUserName(username){
    const user= await db("users").where("username",username).first();
    return user 
 }

