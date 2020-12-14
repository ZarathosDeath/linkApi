const OrderModel = require('../model/order')

exports.orderRepository = () => ({
  async addMany (orders) {
    const newOrders = await OrderModel.insertMany(orders)
    return newOrders
  }
})
