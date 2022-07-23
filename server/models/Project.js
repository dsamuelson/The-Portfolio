const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    projectId: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    htmlUrl: {
        type: String,
        required: true
    },
    deployedUrl: {
        type: String
    },
    topics: [
        {type: String}
    ]
});

const Project = model('Project', projectSchema);

module.exports = Project;