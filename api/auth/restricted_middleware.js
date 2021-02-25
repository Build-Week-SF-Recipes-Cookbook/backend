const jwt= require('jsonwebtoken');
const secrets=require('../../config/secrets');

module.exports=(req,res,next)=>{
    //function to verify token from req
    //grab token from authorization header - to be in the authorization token
    const token = req.headers?.authorization?.split(" ")[1] ?? req.headers?.authorization; //get rid of the bearer space using split or handle without bearer in token
    if(token){
        //verify against the secret
        jwt.verify(token,secrets.jwtSecret,(err,decodedToken)=>{
            if(err){
                //invalid or expired token
                res.status(401).json({message: "token invalid"})
            }else{
                //authorized user with valid token
                //save the decoded token in request - for other functions
                req.decodedJWT=decodedToken; 
                req.userId=decodedToken.subject;
                console.log('userId',req.userId);
                next()
            }
        })
    }else{
        //no token in the authorization header
        res.status(401).json({message:"token required!"})
    }
}