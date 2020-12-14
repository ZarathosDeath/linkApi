const express = require('express')
const axios = require('axios')
const app = express()
const router = require('./routes')

app.use(router)

module.exports = app
