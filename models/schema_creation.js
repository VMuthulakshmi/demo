const mongoose =require('mongoose')
//const passport=require('passport')
//const passport_local=require('passport-local')
const passport_local_mongoose=require("passport-local-mongoose")

const user_schema=mongoose.Schema({
    //dropdups:does not allows duplicate data.
    //username:{type: String,required:true,unique:true,dropDups: true},
    //password:{type:String,require:true}

})
user_schema.plugin(passport_local_mongoose)
module.exports=mongoose.model("Users",user_schema)
