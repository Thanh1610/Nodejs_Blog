const Course = require('../models/courses');
const show = async (req, res) => {
    try {
        const course = await Course.findOne({ slug: req.params.slug }).lean();
        res.render('courses/show', { course });
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

module.exports = {
    show,
};
