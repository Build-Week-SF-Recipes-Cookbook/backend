const {findByUserName} = require('./auth_model');

module.exports={validateBody,validateRegister}


function validateBody(req,res,next){
    const body=req.body;
    if(!body || !body.username || !body.password){
        res.status(400).json({message: "Please provide username and password"})
    }else{
        next();
    }
}

async function validateRegister(req,res,next){
 //check if username already exists in db
 const user= await findByUserName(req.body.username)
 if(user){
     res.status(400).json({message: "username already taken"})
 }else{
     next()
 }
}