const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const OrderSchema = new Schema(
  {
    date: {
      type: Date,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    orgName: {
      type: String,
      required: true
    }
  }
)

module.exports = Mongoose.model('order', OrderSchema)
