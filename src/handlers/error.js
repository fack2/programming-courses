exports.serverError = (error, req, res, next) => {
	res.status(500).render('serverError')
}
exports.pageNotFound = (req, res) => {
	res.status(404).render('notFound')
}
