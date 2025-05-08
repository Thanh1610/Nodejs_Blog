const express = require('express');
const meController = require('../app/controllers/meController');
const router = express.Router();

router.get('/stored/courses', meController.storedCourses);

module.exports = router;
