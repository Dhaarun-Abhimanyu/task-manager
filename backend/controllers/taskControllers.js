const taskModel = require('../models/taskModel')

const getAllTasks = async(req,res) => {
    try{
        const tasks = await taskModel.find({}).sort({createdAt : -1})
        res.status(200).json(tasks)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getCompletedTasks = async(req,res) => {
    try{
        const completedTasks = await taskModel.find({status: 'completed'}).sort({createdAt: -1})
        res.status(200).json(completedTasks)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getLowTasks = async(req,res) => {
    try{
        const lowTasks = await taskModel.find({priority: 'low'}).sort({createdAt: -1})
        res.status(200).json(lowTasks)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getMediumTasks = async(req,res) => {
    try{
        const mediumTasks = await taskModel.find({priority: 'medium'}).sort({createdAt: -1})
        res.status(200).json(mediumTasks)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getHighTasks = async(req,res) => {
    try{
        const highTasks = await taskModel.find({priority: 'high'}).sort({createdAt: -1})
        res.status(200).json(highTasks)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const addTask = async(req,res) => {
    const {name, description, priority} = req.body

    try{
        const task = await taskModel.create({name, description, priority, status: 'incomplete'})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const updateTask = async(req,res) => {
    try{
        const task = await taskModel.findOneAndUpdate({_id: req.params.id}, req.body,{ new: true, runValidators: true })

        if(!task)
            return res.status(404).json({message: 'Task not found'})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const deleteTask = async(req,res) => {
    try{
        const {name} = req.params
        const task = await taskModel.findOneAndDelete({name})

        if(!task)
            return res.status(404).json({message: 'Task not found'})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllTasks,
    getCompletedTasks,
    getLowTasks,
    getMediumTasks,
    getHighTasks,
    addTask,
    updateTask,
    deleteTask,
}