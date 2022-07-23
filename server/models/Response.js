const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const responseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
});

const Response = model('Response', responseSchema);

module.exports = Response;