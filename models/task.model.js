const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [50, 'name can not be more than 50 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
},{timestamps:true});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;
