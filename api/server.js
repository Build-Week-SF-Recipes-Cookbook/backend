const express=require('express');
const helmet= require('helmet');
const cors=require('cors');
//routers
const authRouter=require('./auth/auth_router');
const recipesRouter=require('./recipes/recipes_router');
const ingredientsRouter=require('./ingredients/ingredients_router');
const instructionsRouter=require('./instructions/instructions_router');

const server=express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/auth',authRouter);
server.use('/recipes',recipesRouter);
server.use('/ingredients',ingredientsRouter);
server.use('/instructions',instructionsRouter);

server.get('/',(req,res)=>{
res.status(200).json({message: "Server Up!"})
})

server.use((error,req,res,next) =>{
const statusCode= error.statusCode || 500
res.status(statusCode).json(error);
next();
})

module.exports=server;