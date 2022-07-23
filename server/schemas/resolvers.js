const { Project, Response } = require('../models');

const resolvers = {
    Query: {
        projects: async () => {
            return await Project.find({});
        },
        responses: async () => {
            return await Response.find({});
        }
    },
    Mutation: {
        addResponse: async (parent, args) => {
            const response = await Response.create(args);
            return response;
        }
    }
}

module.exports = resolvers;