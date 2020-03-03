const path = require('path')
const rootDir = require('../utils/path')

function errorHandler(error,req,res,next){

    res.status(404).render('404')

}

module.exports = errorHandler