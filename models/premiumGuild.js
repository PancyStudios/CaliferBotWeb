const mongoose = require('mongoose');

module.exports = mongoose.model('premium-guild', new mongoose.Schema({
    Guild: String,
    Expire: Number,
    Permanent: Boolean,
    })
);