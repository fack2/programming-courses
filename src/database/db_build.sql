BEGIN;

    DROP TABLE IF EXISTS courses
    CASCADE;



CREATE TABLE courses
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description text not null,
    costs text not null,
    teacherName VARCHAR(100) not null,
    available boolean not null,
    courseTime text not null,
    img text NOT NULL
);

INSERT INTO courses
    (name, description, costs, teacherName, available, courseTime, img)
VALUES
    ('Python', 'This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis.', '95$', 'Peter W.', true, '12 weeks', 'https:
//i.udemycdn.com/course/750x422/2023204_d2af_7.jpg'),

    ('Responsive Website Basics', 'In this course you will learn three key website programming and design languages: HTML, CSS and JavaScript. You will create a web page using basic elements to control layout and style. Additionally, your web page will support interactivity.', '100$', 'Lisa L', true, '20 weeks', 'https://res.cloudinary.com/practicaldev/image/fetch/s--wYj4DaGu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.lambdatest.com/blog/wp-content/uploads/2018/05/Html-Css-Js-website.jpg'),

    ('Introduction To Swift Programming', 'Introduction to Swift Programming is the first course in a four part specialization series that will provide you with the tools and skills necessary to develop an iOS App from scratch', '50$', 'Parham Aarabi', false, '--' , 'https://i.udemycdn.com/course/750x422/1392258_6b1f_2.jpg' ),

    ('Java Programming', 'Take your first step towards a career in software development with this introduction to Java—one of the most in-demand programming languages and the foundation of the Android operating system.', '50$', 'Andrew D. Hilton', false , '--', 'https://etllearninghub.com/wp-content/uploads/2017/11/updesco-prog-in-java-courses-02-1-1000x500.jpg'),

    ('Java for Android', 'How to program core features and classes from the Java programming language that are used in Android, which is the dominant platform for developing and deploying mobile device apps.', '60$', 'Julie L. Johnson', true , '15 weeks', 'https://9to5google.com/wp-content/uploads/sites/4/2019/03/android_figure_1.jpg?quality=82&strip=all&w=1600')
;


COMMIT;