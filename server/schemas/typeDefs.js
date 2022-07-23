const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Project {
        _id: ID
        name: String
        projectId: String
        image: String
        htmlUrl: String
        deployedUrl: String
        topics: [String]
    }

    type Response {
        _id: ID
        name: String
        email: String
        message: String
    }

    type Query {
        projects: [Project]
        responses: [Response]
    }

    type Mutation {
        addResponse(name: String!, email: String!, message: String): Response
    }

`;

module.exports = typeDefs;