const { User, Order } = require('../database/models')
const Joi = require('joi')

const userInputSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
})

const userResolver = {
  Query: {
    async user(_, { id }) {
      return await User.findByPk(id, {
        // attributes: { exclude: ['createdAt', 'updatedAt'] },
      })
    },
    user: async (_, { id }) => {
      return await User.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      })
    },
    orders: async (_, { id }) => {
      return await Order.findByPk(id)
    },
  },
  User: {
    orders: async (parent) => {
      // Use Sequelize to fetch the associated orders for the user
      return Order.findAll({
        where: {
          user_id: parent.id,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      })
    },
  },

  Mutation: {
    async createUser(_, { input }) {
      // Validate the input against the schema
      const { error, value } = userInputSchema.validate(input)

      if (error) {
        throw new Error(`Input validation error: ${error.details[0].message}`)
      }

      try {
        const { first_name, last_name, email, username } = input
        const user = await User.create(
          { first_name, last_name, email, username },
          {
            fields: ['first_name', 'last_name', 'email', 'username'], // Exclude updatedAt and createdAt
          }
        )
        return user
      } catch (error) {
        throw new Error('Failed to create the user')
      }
    },
  },
}

module.exports = userResolver
