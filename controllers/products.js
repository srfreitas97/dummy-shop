const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {

    res.render('add-products', {
        pageTitle: 'Add Product', 
        path: '/add-product',
        activeAddProduct: true,
        formsCSS: true
    })

}

exports.postAddProduct = (req,res,next) => {

    const product = new Product();
    product.save({title: req.body.title})
    console.log(Product.products)
    res.redirect('/')

}

exports.getShop = (req,res,next) => {

    res.render('shop', { 
        products:products,
        pageTitle: 'Dummy Shop', path:'/', 
        hasProducts: products.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    })

}