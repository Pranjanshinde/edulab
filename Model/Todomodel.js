const mongoose=require("mongoose");

const Todoschema=mongoose.Schema({
    title : String,
    desc : String,
    date : String,
    priority:String,
    status:String,
    user_id:String,
    maker:String,
    liable:String
});

const Todomodel=mongoose.model("todo",Todoschema);

module.exports={Todomodel};