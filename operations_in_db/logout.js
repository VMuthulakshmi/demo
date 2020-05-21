const bcrypt=require('bcryptjs')
const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()
let session=require('express-session')
const cookies=require('cookie-parser')

const User=require('../models/schema_creation')//import user model(table) from schema creation

router.route('/')
.get((req,res)=>{
    console.log("inside log otu")
    if(req.signedCookies.user){
        res.cookie("user");
    }
    res.json({message:"log out success"})
})

module.exports=router