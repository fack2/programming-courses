const dbConnection = require('../db_connection');

const getcourses = () => {
    return (dbConnection.query('SELECT id,name , img FROM courses;')
        .then(res => res.rows))} 


module.exports = {
    getcourses
};