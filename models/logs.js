const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema({
    guildID: { 
        type: String,
        require: true
    },
    channelID: {
        type: String,
        require:true
    }
})

const model = mongoose.model('Logs', LogsSchema)

module.exports = model;