const bcrypt=require('bcryptjs')
const express=require('express')
const bodyParser=require('body-parser')
const passport=require('passport')


const router=express.Router()
const user=require('../models/schema_creation')//import user model(table) from schema creation



router.use(bodyParser.json()); // parsing the json data and mapping it to an object
router.use(bodyParser.urlencoded({ extended: false })); // next class

router.route('/')
.post((req,res)=>{
    user.register(new user({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});

module.exports=router