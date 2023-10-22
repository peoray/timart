const userSchema = require('./user')
const orderSchema = require('./order')

const rootType = `#graphql
scalar Date

 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`

module.exports = [rootType, userSchema, orderSchema]
