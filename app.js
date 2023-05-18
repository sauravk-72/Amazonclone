require("dotenv").config();
/* The first line of our code is using the require function to include the express module.
 This is how we include and use a package installed from npm in any JavaScript file in our project.*/
const express= require("express"); 
/* app acquires all properties and methods of express
 handles the request and response from the server to the client*/
const app= express();  
const mongoose=require("mongoose");
require("./db/conn");
const Router = require("./routes/Router");
const cookieParser =require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors =require("cors");


const Products=require("./models/Productsschema");

const DefaultData=require("./DefaultData");

const port = process.env.PORT || 80;

/* The app.use() function adds a new middleware to the app.
 Essentially, whenever a request hits your backend, Express will execute the functions you passed to app.use() in order.*/


app.use(express.json()); /* It parses incoming JSON requests and puts the parsed data in req.body.*/
app.use(cors({credentials: true, origin: 'https://amazonclonefrontbysk.onrender.com'}));
app.use(Router);
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}
else {
    app.get("/", (req, res) => {
      res.send("API is running..");
    });
  }

/* The app.listen() method binds itself with the specified host and port to bind and listen for any connections*/
app.listen(port,()=>{
    console.log(`Server is running on port number ${port}`);
});
DefaultData();