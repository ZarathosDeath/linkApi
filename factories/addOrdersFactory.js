const { addOrders } = require('../usecases/addOrders')
const { blingRepository } = require('../repositories/blingRepository')
const { orderRepository } = require('../repositories/orderRepository')
const { pipedriveRepository } = require('../repositories/pipedriveRepository')
const { AddOrdersController } = require('../controllers/addOrdersController')
const { loadDeals } = require('../usecases/loadWonDeals')

exports.makeAddOrdersController = () => {
  const dbAddOrders = addOrders(blingRepository(), pipedriveRepository(), orderRepository())
  const dbLoadDeals = loadDeals(pipedriveRepository())
  const addOrdersController = AddOrdersController(dbLoadDeals, dbAddOrders)
  return addOrdersController
}