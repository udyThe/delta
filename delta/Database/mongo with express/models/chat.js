const mongoose = require('mongoose')


const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        Required: true
    },
    to: {
        type: String,
        Required: true
    },
    msg: {
        type: String,
        maxLength: 50,
        Required: true
    },
    created_at: {
        type: Date,
        Required: true
    }
});


const chat = mongoose.model('chat', chatSchema)

module.exports= chat;