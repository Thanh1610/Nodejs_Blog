const index = (req, res) => {
    res.render('news');
};

const show = (req, res) => {
    res.send('NEW DETAIL!!!');
};

module.exports = {
    index,
    show,
};
