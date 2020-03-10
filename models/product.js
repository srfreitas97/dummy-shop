const products = []
const fs = require('fs')
const path = require('path')

class Product{

    constructor(title){
        this._title = title
    }

    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }

}

module.exports = function Product(title){

    this.title = title

    this.fetchAll = function(cb){
        const p = path.join(
            path.dirname(
                process.mainModule.filename
            ),'data','products.json'
        )
        fs.readFile(p, (err,fileContent) => {
            if(err){
                return cb([])
            }
            return cb(JSON.parse(fileContent))
        })
    }

    this.save = function(){
        const p = path.join(
            path.dirname(
                process.mainModule.filename
            ),'data','products.json'
        )
        products.push(this)
        fs.readFile(p,(err,fileContent) => {
            let products = []
            if(!err){
                products = JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(p,JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }


}