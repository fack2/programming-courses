const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const getData = require('./database/queries/getData')
const getDataId = require('./database/queries/getDataId')
const postData = require('./database/queries/postData')
const helpers = require('./views/helpers/index')

const app = express()
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'public')))

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

app.get('/', (req, res, next) => {
  getData
    .getcourses()
    .then(course => {
      res.render('home', {
        courses: course
      })
    })
    .catch(err => {
      next(err)
    })
})

app.get('/course/:id', (req, res, next) => {
  getDataId
    .getCoursesById(req.params.id)
    .then(course => {
      res.render('course', {
        courses: course
      })
    })
    .catch(err => {
      next(err)
    })
})

app.post('/addCourse', (req, res, next) => {
  postData
    .addCourse(req.body)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      next(err)
    })
})
app.use((error, req, res, next) => {
  res.status(500).render('serverError')
})
app.use((req, res) => {
  res.status(404).render('notFound')
})

module.exports = app
