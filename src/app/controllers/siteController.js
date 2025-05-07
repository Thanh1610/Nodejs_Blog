const Course = require('../models/courses');

const home = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json(courses);
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
    // res.render('news');
};

const search = (req, res) => {
    res.render('search');
};

module.exports = {
    home,
    search,
};
