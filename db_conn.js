let http=require('http')
//to install mangoose --npm imstall mongoose --save
let mongoose=require('mongoose')
let app=require('./index')
//let session=require('express-session')

//connecting to the database
//here the database name is 'dummy' you can change it to anything
//no need to cree databse manually in cmd or compasss it will be created automatically once the first data is inserted.
/*mongoose.connect('mongodb://localhost:27017/dummy?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false&useNewUrlParser=true')
    .then(()=>{
        console.log('successfull')
    }
    )
    .catch(()=>{
        console.log('connection not successfull')
    })

    app.set("port",3033); // setting a port for the express part
    let server = http.createServer(app);   // creating a nodejs server for express 
    server.listen(3033);
*/
//import * from 'http'

//Connecting to database 
//database name can be changed to anything
//you don't have to create database manually in command promt or compass. 
//database will be auto created during the first data insersion in a schema
mongoose.connect("mongodb://localhost:27017/dummy?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false&useNewUrlParser=true")
    .then( (data) => {  //.then function is a promise function which will be executed after the specific operation
        console.log("Connection was successfull")
    }
    )
    .catch(() => { //.catch is same as .then but .catch is called when the operation throws any error
        console.log("not connected")
    })


app.set('port',3034) // setting a port for the express part
let server = http.createServer(app);   // creating a nodejs server for express 
server.listen(3034); // setting a port fot the server(nodejs server)
