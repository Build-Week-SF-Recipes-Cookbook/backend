const router=require('express').Router();

router.get('/',(req,res)=>{
    res.status(200).json({message: "hello from ing router"})
})

module.exports=router;