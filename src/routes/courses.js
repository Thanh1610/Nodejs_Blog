const express = require('express');
const coursesController = require('../app/controllers/coursesController');
const router = express.Router();

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.get('/:slug', coursesController.show);

module.exports = router;
