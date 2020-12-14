const pipedrive = require('pipedrive')
pipedrive.Configuration.apiToken = '0ee910c8363d576e079c81a4e0cb65274c1baf69'

exports.pipedriveRepository = () => ({
  async loadWonDeals () {
    const input = []
    input['status'] = 'won'
    const deals = await pipedrive.DealsController.getAllDeals(input)

    return deals
  }
})
