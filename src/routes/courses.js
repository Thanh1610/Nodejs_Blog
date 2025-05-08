const express = require('express');
const coursesController = require('../app/controllers/coursesController');
const router = express.Router();

router.use('/create', coursesController.create);
router.use('/store', coursesController.store);
router.use('/:slug', coursesController.show);

module.exports = router;
