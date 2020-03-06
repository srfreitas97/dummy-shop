const products = []

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

    this.fetchAll = function(){
        return products
    }

    this.save = function(){
        products.push(this)
    }


}