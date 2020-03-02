const path = require('path')
const rootDir = require('../utils/path')

function errorHandler(error,req,res,next){

    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))

}

module.exports = errorHandler