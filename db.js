const mongoose = require('mongoose')
const dotenv = require('dotenv')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING)
    console.log('Connect to db succesfully')
  } catch(err) {
    console.log(err.message)
    
    //Exit with failure
    process.exit(1)
  }
}

module.exports = connectDB