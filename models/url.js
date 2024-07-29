const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  urlCode: {
    type: String
  },
  longUrl: {
    type: String
  },
  shortUrl: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('url', urlSchema)