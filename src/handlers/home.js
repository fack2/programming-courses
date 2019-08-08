const { getcourses } = require('../database/queries/getData')

exports.getcourse = (req, res, next) => {
	getcourses()
		.then((course) => {
			res.render('home', {
				courses: course
			})
		})
		.catch((err) => {
			next(err)
		})
}
