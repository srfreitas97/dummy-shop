const router = require('express').Router()
const path = require('path')
const rootDir = require('../utils/path')
const products = []


router.get('/',(req,res,next) => {
    res.render('shop', { products:products, docTitle: 'Dummy Shop' })
})

router.get('/add-product', (req,res,next) => {
    res.render('add-products')
})

router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title})
    console.log(products)
    res.redirect('/')
})

module.exports = router