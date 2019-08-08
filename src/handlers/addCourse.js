const { addCourse } = require('../database/queries/postData')

exports.addCourses = (req, res, next) => {
	addCourse(req.body)
		.then(() => {
			res.redirect('/')
		})
		.catch((err) => {
			next(err)
		})
}
