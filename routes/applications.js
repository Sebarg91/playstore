var express = require('express');
var router = express.Router();
var applicationsController = require('../controllers/applicationsController')

//creacion

router.get('/create', applicationsController.crear)

module.exports = router;