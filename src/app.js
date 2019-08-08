const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const helpers = require('./views/helpers/index')
const router = require('./handlers/index')

const app = express()

app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(router)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine(
	'hbs',
	exphbs({
		extname: 'hbs',
		layoutsDir: path.join(__dirname, 'views', 'layouts'),
		defaultLayout: 'main',
		helpers: helpers
	})
)
module.exports = app
