exports.AddOrdersController = (loadWonDeals, addOrders) => 
  async (req, res) => {
    try {
      const wonDeals = await loadWonDeals.load()
      const newOrders = await addOrders.add(wonDeals)
      return res.status(200).json(newOrders)
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
