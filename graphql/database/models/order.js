'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'user_id', // This is the foreign key that links Order to User
        as: 'user', // This will create a virtual property `user` on Order
      })
    }
  }
  Order.init(
    {
      order_date: DataTypes.DATE,
      total_amount: DataTypes.DECIMAL,
      order_status: {
        type: DataTypes.ENUM('shipped', 'processing', 'delivered'),
        defaultValue: 'Processing',
      },
      discount_code: {
        type: DataTypes.STRING(6),
        validate: {
          isAlphanumeric: true,
        },
      },
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps: true,
    }
  )
  return Order
}
