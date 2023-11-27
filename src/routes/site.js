const express = require('express');
const router = express.Router();

const siteController = require('../../app/siteController');


router.use('/registration', siteController.registration);
router.use('/login', siteController.login);
router.use('/protected', siteController.protected);
router.use('/', siteController.index);

module.exports = router;