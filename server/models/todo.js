const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model('todos', TodoSchema)

module.exports = TodoModel