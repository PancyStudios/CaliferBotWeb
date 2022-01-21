const mongoose = require('mongoose');

const model = mongoose.Schema({
    userID: {
        type: String,
        require: true
    },
    colorTAG: {
        type: String,
        require: true
    },
    nameUser: {
        type: String,
        require: true
    },
    descriptionUser: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Redes_Sociales_user', model)