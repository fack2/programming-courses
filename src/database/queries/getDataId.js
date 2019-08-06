const dbConnection = require('../db_connection');


const getCoursesById = (id, cb) => {
    dbConnection.query('SELECT * FROM courses WHERE id = $1;', [id], (error, result) => {
        if (error) {
            cb(error);
        } else {
            cb(null, result.rows[0]);
        }
    });
};

module.exports = {
    getCoursesById
};