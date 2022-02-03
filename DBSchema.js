const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userID: {
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    type: {
        type:String
    },
    tags:{
        type: String
    },
    member: {
        type:String
    },
    url: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("post" , schema)
