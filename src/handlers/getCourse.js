const { getCoursesById } = require('../database/queries/getDataId')

exports.getCourseById = (req, res, next) => {
	getCoursesById(req.params.id)
		.then((course) => {
			res.render('course', {
				courses: course
			})
		})
		.catch((err) => {
			next(err)
		})
}
