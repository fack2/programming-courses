const dbConnection = require('../db_connection');

const getcourses = () => dbConnection.query('SELECT id,name , img FROM courses;')
    .then(res => res.rows);


module.exports = {
    getcourses
};