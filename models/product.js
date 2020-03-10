const products = []
const fs = require('fs')
const path = require('path')
const p = path.join(
    path.dirname(
        process.mainModule.filename
    ),'data','products.json'
)

const getProductsFromFile = (cb) => {
    
    fs.readFile(p, (err,fileContent) => {
        if(err){
            return cb([])
        }
        cb(JSON.parse(fileContent))
    })
}

class Product{

    constructor(title){
        this._title = title
    }

    save(){
        products.push(this)
    }

    static fetchAll(){
        return getProductsFromFile(cb)
    }

}

module.exports = function Product(title){

    this.title = title

    this.fetchAll = function(cb){
        return getProductsFromFile(cb)
    }

    this.save = function(){
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p,JSON.stringify(products), err => {
                console.log(err)
            })
        })
    }


}