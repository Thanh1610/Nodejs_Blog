const express = require('express');
const coursesController = require('../app/controllers/coursesController');
const router = express.Router();

router.use('/:slug', coursesController.show);

module.exports = router;
