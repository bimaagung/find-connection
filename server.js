const app = require('./http/app')

port = process.env.PORT
host = process.env.HOST

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
