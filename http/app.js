const express = require('express')
const app = express()
var morgan = require('morgan')

port = 3000
host = 'localhost'

app.use(morgan('dev'))

app.use('/', (req, res) => {
  res.send('Welcome Express')
})

app.listen(port, host, () => {
  console.log(`Server listening on port http://${host}:${port}`)
})
