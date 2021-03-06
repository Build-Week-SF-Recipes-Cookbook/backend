const router=require('express').Router();
const {validateBody,validateRegister}= require('./auth_middleware');
const dbModel=require('./auth_model');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');
const secrets=require('../../config/secrets');
 
router.post('/register',validateBody,validateRegister, async (req,res,next)=>{
    const credentials=req.body;
    //for valid credential , get rounds from env variable
    const rounds=process.env.BCRYPT_ROUNDS || 8;
    //hash password and set
    const hash= bcryptjs.hashSync(credentials.password,rounds);
    credentials.password=hash;
    try {
        const newUser= await dbModel.addUser(credentials);
        res.status(201).json({message: "register success",newUser})
    } catch (err) {
        next(err)
    }
})

router.post('/login',validateBody,async (req,res,next)=>{
    try {
        const {username,password}=req.body;
        const user= await dbModel.findByUserName(username)
        console.log(user)
        //validate hash password
        if(user && bcryptjs.compareSync(password,user.password)){
            const token=generateToken(user);
            res.status(200).json({message:`Welcome,${user.username}!`,token})
        }else{
            res.status(401).json({message: "invalid credentials"})
        }
    } catch (err) {
        next()
    }
})

function generateToken(user){
    const payload={
      subject:user.id,
      username:user.username,
    }
    const options={
      expiresIn:"1h"
    }
    //generate signature
    const secret=secrets.jwtSecret;
    return jwt.sign(payload,secret,options)
  }

module.exports=router;