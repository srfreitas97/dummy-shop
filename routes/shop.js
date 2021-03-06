const router = require('express').Router()
const productsController = require('../controllers/products')

router.get('/',productsController.getShop)

router.get('/add-product', productsController.getAddProduct)

router.post('/add-product', productsController.postAddProduct)

router.get('/cart',productsController.getCart)

module.exports = router