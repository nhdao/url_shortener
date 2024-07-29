const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db')

//Initialize server
const app = express()

//setup dotenv
dotenv.config()

//Connect to db
connectDB()

//This allows us to accept json data to our API
app.use(express.json({
  extendedValue: false
}))

//Routing
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

//setup our server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

