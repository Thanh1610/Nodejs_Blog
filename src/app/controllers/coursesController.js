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

//[Get/courses/:id/edit]
const edit = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).lean();
        res.render('courses/edit', { course });
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

//[Put/courses/:id]
const update = async (req, res) => {
    try {
        const course = await Course.updateOne({ _id: req.params.id }, req.body);
        res.redirect('/me/stored/courses');
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

//[Delete/courses/:id]
const destroy = async (req, res) => {
    try {
        const course = await Course.deleteOne({ _id: req.params.id }, req.body);
        res.redirect('/me/stored/courses');
    } catch (error) {
        res.status(500).send('Lỗi server');
    }
};

module.exports = {
    show,
    create,
    store,
    edit,
    update,
    destroy,
};
