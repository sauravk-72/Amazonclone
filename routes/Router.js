const express = require("express");
const Router = new express.Router();
const Products = require("../models/Productsschema");

const USER = require("../models/Userschema");
const Authenticate = require("../middleware/Authenticate");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
const secretKey = process.env.KEY;

const Address = require("../models/Addressschema");



// get productsdata api
Router.get("/getproducts", async (req, res) => {
    try {
        //find is mongodb method...call find method in products schema
        const Productsdata = await Products.find();
        res.status(201).json(Productsdata);
    } catch (error) {
        console.log("error" + error.message);
    }
})

//get individual data
Router.get("/getproductsone/:id", async (req, res) => {
    try {
        //we will call this url,we will get id from url paarameters

        //ANOTHER METHOD
        //const id=req.params.id;
        const { id } = req.params;
        //in mongodb,every data is given id...first id will will databas id and second one is from params...matching both ids 
        const individualdata = await Products.findOne({ id: id });
        res.status(201).json(individualdata);
    } catch (error) {
        res.status(400).json(individualdata);
        console.log("error" + error.message);
    }
})




//register data
Router.post("/register", async (req, res) => {
    //console.log(req.body);
    //getting values from the body
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill the all data" });
        console.log("not data available");
    };


    try {
        //matching the email in databse with the entered email by user
        const preuser = await USER.findOne({ email: email });
        //if email is already present in database
        if (preuser) {
            res.status(422).json({ error: "This Email already exists" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password and confirm password are not matching" })
        } else {
            //create user
            const finalUser = new USER({
                fname, email, mobile, password, cpassword
            });
            //store the user in database
            const storedata = await finalUser.save();
            console.log({"router":storedata})
            res.json(storedata)
        }
    } catch (error) {
        res.status(401).json(error);
    }
});



//Address api

Router.post("/address", async (req, res) => {
    //console.log(req.body);
    const { fname, email, mobile, password, address, state, city, zip } = req.body;
    try {
        const finalAddress = new Address({
            fname, email, mobile, password, address, state, city, zip
        });



        const storedataa = await finalAddress.save();
        console.log(storedataa);

        res.status(201).json(storedataa);
    }



    catch (error) {
        res.status(401).json(error);
    }
});


//Login api
Router.post("/login", async (req, res,) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Fill all details" })
    };

    try {
        const userlogin = await USER.findOne({ email: email });
        console.log(userlogin + "user value");

if(userlogin){
    //compare the password by decrypting the password
        const isMatch = await bcrypt.compare(password, userlogin.password);
        console.log(isMatch + "pass match");
        if (!isMatch) {
            res.status(400).json({ error: " Wrong Password" });
        } else {
             //token genrate
            const token = await userlogin.generateAuthToken();
            console.log(token);
            //res.cookie("Amazonweb", token, {
               // expires: new Date(Date.now() + 900000),
                //httpOnly: "true"
              const result={
                userlogin,token
            }
            return res.status(200).json(result)
            
        }
    }else{
res.status(400).json({error:"Invalid details"})
    }
}     
    catch (error) {
        res.status(400).json({ error: "invalid detials user" })
    }
})

//adding to the cart api
Router.post("/addcart/:id", Authenticate, async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
        console.log(cart + "cart value");

        const UserContact = await USER.findOne({ _id: req.userID });
        console.log(UserContact);


        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "invalid user" });
        }


    } catch (error) {
        res.status(401).json({ error: "invalid user" });
    }
});

// get cart details

Router.get("/cartdetails", Authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        res.status(201).json(buyuser);
    } catch (error) {
        console.log("error" + error)
    }
})



// get valid user

Router.get("/validuser", Authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
        res.status(201).json(validuserone);
    } catch (error) {
        console.log("error" + error)
    }
})




// remove item from cart
Router.delete("/remove/:id", Authenticate, async (req, res) => {
    try {
        const { id } = req.params;
//filter the items in usercart..and return the items which doesnt match with product id...hence product is removed
        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id;
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("item remove");
    } catch (error) {
        console.log("error " + error);
        res.status(400).json(req.rootUser);
    }
})


Router.get("/lougout", Authenticate, (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("uuser logout");
    } catch (error) {
        // res.status(01).json(req.rootUser.toekns);
        console.log("error for user logout");
    }
})


module.exports = Router;
