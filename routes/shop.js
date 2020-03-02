const router = require('express').Router()
const path = require('path')
const rootDir = require('../utils/path')

router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

module.exports = router