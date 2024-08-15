const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
    },
    description: {
        type: String,
        requried: true,
        trim: true,
        maxlength: 200,
    },
    priority: {
        type: String,
        required: true,
        enum: ['low', 'medium', 'high'],
    },
    status: {
        type: String,
        required: true,
        enum: ['incomplete', 'completed'],
    },
},{timestamps: true})

module.exports = mongoose.model('Task', taskSchema)