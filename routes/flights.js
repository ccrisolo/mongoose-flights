var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET /flights/new  */
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show)
router.post('/', flightsCtrl.create);

module.exports = router;


//now create the flightsCtrl in controllers..
//and export the 'new' action