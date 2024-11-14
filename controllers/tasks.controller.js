const Task = require('../models/task.model')

exports.tasks = async (req,res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({"tasks":tasks}) 
    }catch(error){
        res.status(500).json({message:error.message})
    }
};

exports.task = async (req,res)=>{
    try{
        const {id} = req.params
        const tasks = await Task.findById(id);
        res.status(200).json({"task":tasks}) 
    }catch(error){
        res.status(500).json({message:error.message})
        console.log(error)
    }
};

exports.addTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task) 
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.updateTask = async (req,res)=>{
    try {
        const { id } = req.params
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        
        if(!task){
            return res.status(404).json({"message":"Task not found"})
        }

        res.status(200).json({"task":task})

    }catch(error){
        console.log(error)
        res.status(404).json({"message":error.message})
    }
};

exports.deleteTask = async (req,res)=>{
    try{
        const {id} = req.params
        const task =  await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({message:"Task not found"})
        }
        res.status(200).send("deleted")
    } catch(error){
        res.status(500).json({message:error.message})
    }
}