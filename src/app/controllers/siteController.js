const Course = require('../models/courses');

const home = async (req, res) => {
    try {
        const courses = await Course.find({}).lean();
        res.render('home', { courses });
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

const search = (req, res) => {
    res.render('search');
};

module.exports = {
    home,
    search,
};
