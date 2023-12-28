//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try {
            //extract title and desxcription from reauest body
           const todo=await Todo.find({});
           res.status(200)
           .json({
            success:true,
            data:todo,
       
            message:"Entire Todo Data Fatched",
           });
    }
    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Entire Todo Data  is not Fatched",
         
        
        });
    }
}

exports.getTodoById=async(req,res) => {
    try{
        const id=req.params.id;
        const todo= await Todo.findById({_id : id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"vot found",

            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:"to data successfully fetched"

        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Entire Todo Data  is not Fatched",
         
        
        });

    }
}