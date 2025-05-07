const home = (req, res) => {
    res.render('news')
}

const search = (req, res) => {
    res.render('search')
}

module.exports = {
    home,
    search
};