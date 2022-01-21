const mongoose = require('mongoose')

const PrefixSchema = mongoose.Schema({
    guildID: {
        type: String,
        require: true
    },
    newPrefix: {
        type: String,
        require: true
    }
})

const model = mongoose.model("Prefixes", PrefixSchema)

module.exports = model;