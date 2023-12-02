const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");
const secretKey=process.env.KEY;


const Userschema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email address")
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
 tokens: [
     {
         token: {
             type: String,
             required: true,
         }
     }
 ],
    carts: Array
});

//using pre method..before saving user call... middleware next() in database we will hash the password
Userschema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }

    next();

});

 //token generator
Userschema.methods.generateAuthToken =async function(){
    try{
        //payload and secret key
        let newtoken=jwt.sign({_id:this._id},secretKey,{
            expiresIn:"1d",
        });
        this.tokens =this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    }catch(error){
        console.log(error);
    }
}


// add tocart data
Userschema.methods.addcartdata = async function(cart){
    try {
        this.carts = this.carts.concat(cart);
        await this.save();
        return this.carts
    } catch (error) {
        console.log(error);
    }
}



const USER = new mongoose.model("USER", Userschema);

module.exports = USER;