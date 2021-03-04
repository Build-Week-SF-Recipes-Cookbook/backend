const express=require('express');
const helmet= require('helmet');
const cors=require('cors');
const morgan = require("morgan");
 
//routers
const authRouter=require('./auth/auth_router');
const recipesRouter=require('./recipes/recipes_router');
const ingredientsRouter=require('./ingredients/ingredients_router');
const instructionsRouter=require('./instructions/instructions_router');

//restricted middleware
const restrict= require('./auth/restricted_middleware');

const server=express();
server.use(express.json());
server.use(helmet());
// server.use(morgan("dev"));
server.use(cors());

server.use('/api/auth',authRouter);
//only logged in users will have below access
server.use('/api/recipes', restrict, recipesRouter);
server.use('/api/ingredients', restrict, ingredientsRouter);
server.use('/api/instructions', restrict, instructionsRouter);

server.get('/',(req,res)=>{
res.status(200).json({message: "Server Up!"})
})

server.use((error,req,res,next) =>{
const statusCode= error.statusCode || 500
res.status(statusCode).json(error);
next();
})

module.exports=server;