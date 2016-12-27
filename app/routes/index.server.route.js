var indexController = require('../controller/index.server.controller');

var router = require('express').Router();

router.route('/').get(indexController.initPage);

module.exports = router;