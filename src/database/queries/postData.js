const dbConnection = require('../db_connection');

const addCourse = course => {
 return(     
    dbConnection.query(
            'INSERT INTO courses (name, description, costs, teacherName, available, courseTime, img) VALUES ($1, $2, $3, $4, $5 , $6 , $7)', [course.name, course.description, course.costs, course.teacherName, course.available, course.courseTime, course.img])
        .then(res => res.rows[0])
 )
};

module.exports = {
    addCourse
};