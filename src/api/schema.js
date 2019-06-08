const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const userAttrs = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${userAttrs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${userAttrs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })