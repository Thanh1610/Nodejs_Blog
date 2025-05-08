const Course = require('../models/courses');
//[Get/courses/show]
const show = async (req, res) => {
    try {
        const course = await Course.findOne({ slug: req.params.slug }).lean();
        res.render('courses/show', { course });
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

//[Get/courses/create]
const create = async (req, res) => {
    res.render('courses/create');
};

//[Post/courses/store]
const store = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Lỗi khi lưu khoá học' });
    }
};
module.exports = {
    show,
    create,
    store,
};
