const router = require('express').Router()
const { makeLoadWonDeals } = require('../factories/loadWonDealsFactory')
const loadWonDealsController = makeLoadWonDeals()
const { makeAddOrdersController } = require('../factories/addOrdersFactory')
const addOrdersController = makeAddOrdersController()

router
  .route('/deals')
  .get(loadWonDealsController)

router
  .route('/orders')
  .post(addOrdersController)

module.exports = router
