const express=require('express')
const router=express.Router()

let auth=require('./auth')
//if any error occured then it was handled by the paassport authentication
router.route('/')
.get(auth.verifyUser,(req,res)=>{
    res.json({message:"inside comments"})
})


module.exports=router