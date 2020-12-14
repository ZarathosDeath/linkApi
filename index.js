const app = require('./config/app')
const { MongoHelper } = require('./config/mongoHelper')

MongoHelper
  .connect('mongodb+srv://admin:linkapiteste@cluster0.7v7pt.mongodb.net/linkapi?retryWrites=true&w=majority')
  .then(() => {
    app.listen(3000, () => console.log('Server running on port 3000'))
  })
  .catch(console.error)