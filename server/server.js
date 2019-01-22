const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");


const apiRouter = require("./api");
const secondApiRouter = require("./secondApi");

//connection path to mongo Atlas (cloud)
//mongoose.connect('mongodb+srv://er-mm:*mayank1995*@mmcluster-bmmj1.mongodb.net/test?retryWrites=true');
//ATLAS CONFIGURATION
mongoose.connect('mongodb+srv://er-mm:*mayank1995*@mmcluster-bmmj1.mongodb.net/test?retryWrites=true', {
//useMongoClient : true
useNewUrlParser: true
});
//mongoose.connect('mongodb://localhost:27017');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json({ type: 'application/*+json' }));
//app.use(require('./api'));
app.use(morgan('dev'));

//cors
app.use((req,res,next) => {
 res.header('Access-Control-Allow-Origin','*');
 res.header(
   'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
 if(req.method === "OPTIONS"){
   res.header(
     'Access-Control-Allow-Methods', 
     'PUT', 'POST', 'GET', 'DELETE'
    );
   return res.status(200).json({});
  }
   next();
});


app.use('/api',apiRouter);
app.use('/secondApi',secondApiRouter);

//error handling in node
//custom
app.use((req,res,next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
//default (all errors)
app.use((error,req,res,next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message : error.message
    }
  })
});


var port = 1212;
var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("**********", host);
    console.log("*/////////////", port);
  
  });

  module.exports =app;

  
/**
 * 
 *          Notes : CORS
 * Cross Origin Resourse Sharing
 * when the localhost of client and server are same we dont 
 * see any cors error ... BUT 
 * when these are different , we generally see this error
 * because browser dont know which server you are coming form
 * 
 * to run restful api , we can disable these errors
 * by sending some headers from server to client
 * 
 * 
 */