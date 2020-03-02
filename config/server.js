require('dotenv').config()
const express = require('express')
const app = express()
const shopRoutes = require('../routes/shop')
const errorHandler = require('../middlewares/errorHandler')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, '../', 'public')))
app.use('/',shopRoutes)
app.use( (req,res,next)=> {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'))
})

app.listen(process.env.PORT, () => {
    console.log(`Node server running on port ${process.env.PORT}`)
})

module.exports = app;