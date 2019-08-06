const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const getData = require('./database/queries/getData')
const getDataId = require('./database/queries/getDataId')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main'

  })
)

app.get('/', (req, res, next) => {
  getData.getcourses()
    .then((course) => {
      res.render('home', { courses: course })
    })
    .catch(err => {
      next(err)
    })
})

app.get('/course/:id', (req, res, next) => {
  getDataId.getCoursesById(req.params.id)
    .then((course) => {
      res.render('course', { courses: course })
    })
    .catch(err => {
      next(err)
    })
})

module.exports = app
