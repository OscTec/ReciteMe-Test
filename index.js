const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).json('Hello World')
})

export const server = app.listen(3000)
