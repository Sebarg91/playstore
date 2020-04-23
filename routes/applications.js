var express = require('express');
var router = express.Router();
var applicationsController = require('../controllers/applicationsController')

//creacion

router.get('/crear', applicationsController.crear)

module.exports = router;