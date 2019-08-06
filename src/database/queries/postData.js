const dbConnection = require('../db_connection');

const addCourse = (course, cb) => {
    dbConnection.query(
        'INSERT INTO courses (name, description, costs, teacherName, available, courseTime, img) VALUES ($1, $2, $3, $4, $5 , $6 , $7)', [course.name, course.description, course.costs, course.teacherName, course.available, course.courseTime, course.img],
        (error, result) => {
            if (error) {
                cb(error);
            } else {
                cb(null, result);
            }
        },
    );
};

module.exports = {
    addCourse
};