const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userID: {
        type: String
    },
    title: {
        type: String,
        default: "no title"
    },
    desc: {
        type: String,
        default: "no description"
    },
    type: {
        type:String
    },
    tags:{
        type: String
    },
    member: {
        type:String,
        default: "not countable"
    },
    url: {
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("ad" , schema)
