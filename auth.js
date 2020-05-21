var passport=require("passport")
var localstatergy=require('passport-local').Strategy;
var jwtstrategy = require('passport-jwt').Strategy;
var extractjwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config');


var user=require('./models/schema_creation')
var config=require('./config')
passport.use(new localstatergy(user.authenticate()));


passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user,'1234-5678-9101-2131',
        {expiresIn: 36000});
};

var opts = {};
opts.jwtFromRequest = extractjwt.fr
opts.secretOrKey ='1234-5678-9101-2131';

exports.jwtPassport = passport.use(new jwtstrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser=function(req,res){
    console.log("here inside verfy user");
    console.log(opts)
    passport.authenticate('jwt', {session: false});
}
/*
//generates token and sign in
exports.getToken=function(user){
    return jwt.sign(user,config.secretkey,
        {
            expiresIn:3600//1hr later
        })
}
//extracting the token from the request
var opts={};
opts.jwtFromRequest=extractjwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey=config.secretkey;

exports.jwtPassport=passport.use(new jwtstatergy(opts,
    (jwt_payload,done)=>{
        console.log("jwt payloads ",jwt_payload)
        user.findOne({_id:jwt_payload.sub})
        .then(()=>{
            if(user){
                return done(null,user)
            }
            else{
                return done(null,false)
            }
        })
        .catch((err)=>{
            return done(err,false)
        })
       
    }));

///checking the user  'jwt' is the statergy  sesssion no need bcz we use jwt
//verify the user
    exports.verifyuser=passport.authenticate('jwt',{session:false});*/