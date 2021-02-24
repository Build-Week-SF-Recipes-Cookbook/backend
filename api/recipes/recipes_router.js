const router=require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json({message: "hello from router"})
})

module.exports=router;