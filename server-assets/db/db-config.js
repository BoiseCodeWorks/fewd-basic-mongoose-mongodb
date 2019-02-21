let mongoose = require('mongoose')
let connectionStr = "mongodb+srv://iamporter:top-secret1@porters-pizza-shack-x0nuc.azure.mongodb.net/test?retryWrites=true"
let connection = mongoose.connection

mongoose.connect(connectionStr, {
  useNewUrlParser: true
})

connection.on("error", e => {
  console.log("DB error:", e)
})

connection.on("open", () => console.log("connected to DB!"))