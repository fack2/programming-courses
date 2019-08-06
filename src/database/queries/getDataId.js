const dbConnection = require('../db_connection')

const getCoursesById = id => {
  return (
    dbConnection.query('SELECT * FROM courses WHERE id = $1;', [id])
      .then(res => res.rows)
      .catch(console.log)
  )
}

module.exports = {
  getCoursesById
}
