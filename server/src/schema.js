const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    username: String
    email: String!
  }

  type AuthUser {
    token: String!
    user: User!
  }

  type Query {
    user(id: Int!): User
    allUsers: [User!]!
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): AuthUser!
    logout: Boolean
    addUser(username: String, email: String!, password: String!): AuthUser!
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`

module.exports = typeDefs;
