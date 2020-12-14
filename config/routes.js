const router = require('express').Router()
// factory load won deals
const { LoadWonDealsController } = require('../controllers/loadWonDealsController')
const { pipedriveRepository } = require('../repositories/pipedriveRepository')
const { loadDeals } = require('../usecases/loadWonDeals')
const dbLoadDeals = loadDeals(pipedriveRepository())
const loadWonDealsController = LoadWonDealsController(dbLoadDeals)
// factory add buy orders
const { addOrders } = require('../usecases/addOrders')
const { blingRepository } = require('../repositories/blingRepository')
const { orderRepository } = require('../repositories/orderRepository')
const dbAddOrders = addOrders(blingRepository(), pipedriveRepository(), orderRepository())
const { AddOrdersController } = require('../controllers/addOrdersController')
const addOrdersController = AddOrdersController(dbLoadDeals, dbAddOrders)

router
  .route('/deals')
  .get(loadWonDealsController)

router
  .route('/orders')
  .post(addOrdersController)

module.exports = router
