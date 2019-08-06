const dbConnection = require('../db_connection')

const getcourses = () => dbConnection.query('SELECT name , img FROM courses;')
  .then(res => res.rows)
  .catch(console.log)

module.exports = {
  getcourses
}
