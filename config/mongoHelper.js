const Mongoose = require('mongoose')

exports.MongoHelper = {
  client: null,
  uri: null,

  async connect (uri) {
    this.uri = uri
    this.client = await Mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect () {
    await this.client.close()
    this.client = null
  }
}
