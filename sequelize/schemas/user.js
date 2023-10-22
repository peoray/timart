const userSchema = `#graphql
type User {
  id: ID!
  first_name: String!
  last_name: String!
  username: String!
  email: String!
  orders: [Order!]
  createdAt: Date
  updatedAt: Date
}

extend type Query {
  users: [User!]
  user(id: ID!): User
  orders(id: ID!): Order
}

extend type Mutation {
    createUser(input: UserInput): User!
}

input UserInput {
  first_name: String!
  last_name: String!
  email: String!
  username: String!
 }
`

module.exports = userSchema
