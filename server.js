const app = require('./app')

port = process.env.PORT
host = process.env.HOST

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
