exports = class Product{

    static products = [];

    constructor(title){

        this._title = title;

    }

    save(){
        products.push(this)
    }


    static fetchAll(){
        return this. products
    }

}