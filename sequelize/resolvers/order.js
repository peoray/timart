const { User, Order } = require('../database/models')
const Joi = require('joi')

const orderInputSchema = Joi.object({
  total_amount: Joi.number().required(),
  order_date: Joi.date().required(),
  order_status: Joi.string()
    .valid('pending', 'completed', 'cancelled')
    .required(),
  user_id: Joi.number().required(),
})

const orderResolver = {
  Query: {
    async orders() {
      return Order.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      })
    },
    async order(_, { id }) {
      return Order.findOne({
        where: {
          user_id: id,
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      })
    },
  },

  Mutation: {
    async createOrder(_, { input }) {
      const { error, value } = orderInputSchema.validate(input)

      if (error) {
        throw new Error(`Input validation error: ${error.details[0].message}`)
      }

      try {
        const { total_amount, order_date, order_status, user_id } = input
        const order = await Order.create(
          {
            total_amount,
            order_date,
            order_status,
            user_id,
          },
          {
            fields: ['total_amount', 'order_date', 'order_status'], // Exclude updatedAt and createdAt
          }
        )
        return order
      } catch (error) {
        throw new Error('Failed to create the order')
      }
    },
  },
}

module.exports = orderResolver
