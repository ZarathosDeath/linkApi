const { LoadWonDealsController } = require('../controllers/loadWonDealsController')
const { pipedriveRepository } = require('../repositories/pipedriveRepository')
const { loadDeals } = require('../usecases/loadWonDeals')
const dbLoadDeals = loadDeals(pipedriveRepository())

exports.makeLoadWonDeals = () => {
  const loadWonDealsController = LoadWonDealsController(dbLoadDeals)
  return loadWonDealsController
}