const express=require("express");
const { Todomodel } = require("../Model/Todomodel");

const TodoRouter=express.Router();

TodoRouter.post("/",async(req,res)=>{
    try {
      console.log(req.body,1);
        const post=new Todomodel(req.body);
        await post.save();        
        res.send({"msg":"new todo added"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

TodoRouter.get("/",async(req,res)=>{
  console.log(req.query);
  let {priority,status,liable}=req.query;
        console.log(priority,liable);
        let obj1={}
        if(priority)
        {
          obj1={...obj1,priority:priority}
        }
        if(liable)
          {
            obj1={...obj1,liable:liable}
          }
          if(status)
            {
              obj1={...obj1,status:status}
            }
    try {
      if(req.body.type=="admin")
      {
        console.log(req.body,3);
        const Todos=await Todomodel.find(obj1);
        // console.log(Todos);
        //  const todo=Todos.filter((item)=>item.liable.includes(liable) || item.user_id==req.body.user_id);
        res.send(Todos);
      }else{
        console.log(req.body,3);
        // console.log(req.headers.authorization);
        const Todos=await Todomodel.find({maker:req.body.name,...obj1});
        // console.log(Todos);
        //  const todo=Todos.filter((item)=>item.liable.includes(liable) || item.user_id==req.body.user_id);
        res.send(Todos);
      }
        // const {liable}=req.query;
        // console.log(liable)
        
    } catch (error) {
      res.send({"msg":error.message});  
    }
});


TodoRouter.get("/:id",async(req,res)=>{
  try {
    const {id}=req.params;
    console.log(id);
    let todo=await Todomodel.findOne({_id:id});
    res.send(todo);
  } catch (error) {
    res.send({"msg":error.message});  
  }
});

TodoRouter.patch("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await Todomodel.findByIdAndUpdate({_id:id},req.body);
        res.send({"msg":"post edited successfully"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

TodoRouter.delete("/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        console.log(id);
        await Todomodel.findByIdAndDelete({_id:id});
        res.send({"msg":"post deleted successfully"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

module.exports={TodoRouter};