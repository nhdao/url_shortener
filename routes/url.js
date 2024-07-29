const express = require('express')
const validUrl = require('valid-url')
const shortId = require('shortid')
const urlModel = require('./../models/url')
const router = express.Router()
//We create short url in this router

//@route      POST /api/url/shorten
//@desc       Create short url
router.post('/shorten', async (req, res) => {
  const {longUrl} = req.body

  if(!validUrl.isUri(process.env.BASE_URL)) {
    res.status(400).json({
      message: 'Invalid base url'
    })
  }

  const urlCode = shortId.generate()

  if(validUrl.isUri(longUrl)) {
    try {
      let foundUrl = await urlModel.findOne(longUrl)
      if(foundUrl) {
        res.json(longUrl)
      } else {
        shortUrl = process.env.BASE_URL + '/' + urlCode

        const newUrl = new urlModel({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date()
        })

        await urlModel.save()
      }
    } catch(err) {
      console.log(err.message)
      res.status(500).json({
        message: 'Server error'
      })
    }
  } else {
    res.status(400).json({
      message: 'Bad request'
    })
  }
})

module.exports = router