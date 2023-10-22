const orderSchema = `#graphql
scalar Date

type Order {
  id: ID!
  total_amount: Float!
  order_date: Date!
  order_status: String!
  user: User!
}

extend type Query {
  orderss: [Order!]
  order(user_id: ID!): Order
}

extend type Mutation {
    createOrder(input: OrderInput): Order!
}

input OrderInput {
  total_amount: Float!
  order_date: Date!
  user_id: ID!
  order_status: String!
 }
`

module.exports = orderSchema
