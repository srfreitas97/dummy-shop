const router = require('express').Router()
const path = require('path')
const rootDir = require('../utils/path')
const products = []


router.get('/',(req,res,next) => {
    res.render('shop', { 
        products:products,
        pageTitle: 'Dummy Shop', path:'/', 
        hasProducts: products.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    })
})

router.get('/add-product', (req,res,next) => {
    res.render('add-products', {
        pageTitle: 'Add Product', 
        path: '/add-product',
        activeAddProduct: true,
        formsCSS: true
    })
})

router.post('/add-product', (req,res,next) => {
    products.push({title: req.body.title})
    console.log(products)
    res.redirect('/')
})

module.exports = router