const express = require('express')
const router = express.Router()
const { getcourse } = require('./home')
const { getCourseById } = require('./getCourse')

const { addCourses } = require('./addCourse')
const error = require('./error')

router.get('/', getcourse)

router.get('/course/:id', getCourseById)

router.post('/course', addCourses)

router.use(error.pageNotFound)
router.use(error.serverError)

module.exports = router
