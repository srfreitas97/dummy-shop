const Product = require('../models/product')

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
    console.log(products)
    res.redirect('/')
    
}

exports.getShop = (req,res,next) => {

    const products = Product.fetchAll()
    res.render('shop', { 
        products: products,
        pageTitle: 'Dummy Shop', path:'/', 
        hasProducts: products.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    })

}