const Course = require('../models/courses');

const storedCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).lean();
        res.render('me/stored-Courses', { courses });
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

module.exports = {
    storedCourses,
};
