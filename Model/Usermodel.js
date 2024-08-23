const mongoose=require("mongoose");

const Userschema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String,
    type:String
});

const UserModel=mongoose.model("user",Userschema);

module.exports={UserModel};