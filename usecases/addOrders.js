exports.addOrders = (blingRepository, pipedriveRepository, orderRepository) => ({
  async add () {
    const deals = await pipedriveRepository.loadWonDeals()
    const orders = deals.data.map((deal) => {
      return {
        value: deal.value,
        date: deal.won_time,
        title: deal.title,
        orgName: deal.org_name
      }
    })
    const newOrders = await orderRepository.addMany(orders)
    await blingRepository.add(newOrders)
    return newOrders
  }
})