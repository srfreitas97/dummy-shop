const router = require('express').Router()
const path = require('path')
const rootDir = require('../utils/path')
const products = []


router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title})
    console.log(products)
    res.redirect('/')
})

module.exports = router