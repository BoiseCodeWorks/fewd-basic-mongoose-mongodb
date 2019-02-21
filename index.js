let express = require('express')
let bp = require('body-parser')
let server = express()
let PORT = 3000
require('./server-assets/db/db-config')

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

let pizzaRoutes = require('./server-assets/routes/pizzas')
server.use('/api/pizzas', pizzaRoutes)





server.use('*', (err, req, res, next) => {
  console.log(err)
  res.status(err.status || 404).send({
    message: "sorry, request failed",
    err
  })
})

server.listen(PORT, () => console.log("server is listening on", PORT))