const mongonse = require('mongoose');

module.exports = mongonse.model("custom-commands", new mongonse.Schema({
    Guild: String,
    Command: String,
    Response: String
}))