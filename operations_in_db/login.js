const bcrypt=require('bcryptjs')
const express=require('express')
const bodyParser=require('body-parser')
const passport=require('passport')
var auth=require('../auth')
const router=express.Router()


const User=require('../models/schema_creation')//import user model(table) from schema creation
//let session=require('express-session')


router.use(bodyParser.json()); // parsing the json data and mapping it to an object
router.use(bodyParser.urlencoded({ extended: false })); // next class


router.route('/')
.post( passport.authenticate('local'),(req,res)=>{
  //To keep the json web token small neet and clean i only store the id
  //if loaded properly the req will 
        var token=auth.getToken({_id:req.user._id})
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, token :token,status: 'You are successfully logged in!'});
        console.log("this is logged in")
      })
 

module.exports=router