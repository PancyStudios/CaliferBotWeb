const mongoose = require('mongoose')

const Social_Bot = mongoose.Schema({
    guildID: {
        type: String,
        require: true
    },
    channelPostID: {
        type: String,
        require: true
    }
})

const model = mongoose.model('Redes_Sociales_bot', Social_Bot)

module.exports = model;