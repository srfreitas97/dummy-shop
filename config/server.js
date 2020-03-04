require('dotenv').config()
const express = require('express')
const app = express()
const shopRoutes = require('../routes/shop')
const errorHandler = require('../middlewares/errorHandler')
const path = require('path')
const expressHbs = require('express-handlebars')

app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout.hbs'}))
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, '../', 'public')))
app.use('/',shopRoutes)
app.use(errorHandler.get404)

app.listen(process.env.PORT, () => {
    console.log(`Node server running on port ${process.env.PORT}`)
})

module.exports = app;