const mongoose = require('mongoose');

module.exports = mongoose.model(
    'warnsV2',
    new mongoose.Schema({
        userId: String,
        guildId: String,
        moderatorId: String,
        reason: String,
        timestamp: String,
    })
);