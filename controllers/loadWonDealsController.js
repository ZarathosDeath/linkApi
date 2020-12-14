exports.LoadWonDealsController = (loadWonDeals) => 
  async (req, res) => {
    try {
      const wonDeals = await loadWonDeals.load()
      return res.status(200).json(wonDeals)
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
