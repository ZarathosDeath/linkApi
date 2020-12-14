exports.loadDeals = (pipedriveRepository) => ({
  async load () {
    const deals = await pipedriveRepository.loadWonDeals()
    return deals
  }
})