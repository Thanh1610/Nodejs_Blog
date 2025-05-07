const express = require('express');
const siteController = require('../app/controllers/siteController');
const router = express.Router();

router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
