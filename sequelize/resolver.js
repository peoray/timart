const { User, Order } = require('./database/models')
const { users, orders } = require('./db.js')

const resolvers = {
  //   Query: {
  //     async user(_, { id }) {
  //       //   return User.findById(id)
  //       return [{ id: 1, name: 'Emma' }]
  //     },
  //     async order(_, { id }) {
  //       return User.findById({ user_id: id })
  //     },

  Query: {
    users() {
      return users
    },
    user(_, { id }) {
      return users.find((user) => user.id === id)
    },
    orders() {
      return orders
    },
  },
  User: {
    orders(parent) {
      return orders.filter((order) => order.user_id == parent.id)
    },
  },
  //   },

  Mutation: {
    async createUser(_, { input }) {
      const user = await User.create(input)
      return user
    },
    async createOrder(_, { input }) {
      const order = await Order.create(input)
      return order
    },
  },
}

module.exports = resolvers
