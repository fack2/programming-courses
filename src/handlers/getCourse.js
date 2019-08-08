const { getCoursesById } = require('../database/queries/getDataId')

exports.getCourseById = (req, res, next) => {
	getCoursesById(req.params.id)
		.then((course) => {
			if (course.length > 0) {
				res.render('course', {
					courses: course
				})
			} else {
				res.redirect('/')
			}
		})
		.catch((err) => {
			next(err)
		})
}
