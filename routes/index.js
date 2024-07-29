const express = require('express')
const urlModel = require('./../models/url')

const router = express.Router()
//We redirect our shortUrl to the original url 

//@route      GET /:code
//@desc       Redirect to original url
router.get(':code', async (req, res) => {
  const urlCode = req.params.code
  try {
    const foundUrl = urlModel.findOne(urlCode)
  
    if(foundUrl) {
      return res.redirect(foundUrl)
    } else {
      return res.status(404).json({
        message: 'Link not found'
      })
    }
  } catch(err) {
    console.log(err.message)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router