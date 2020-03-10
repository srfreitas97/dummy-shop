const Product = require('../models/product')
const p = new Product()

exports.getAddProduct = (req,res,next) => {

    res.render('add-products', {
        pageTitle: 'Add Product', 
        path: '/add-product',
        activeAddProduct: true,
        formsCSS: true
    })

}

exports.postAddProduct = (req,res,next) => {

    const product = new Product(req.body.title)
    product.save();
    res.redirect('/')
    
}

exports.getShop = (req,res,next) => {

    p.fetchAll(products => {
        res.render('shop', { 
            products: products,
            pageTitle: 'Dummy Shop', path:'/', 
            hasProducts: products.length > 0 ? true : false,
            activeShop: true,
            productCSS: true
        })
    })
    

}