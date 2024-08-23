const express = require('express');
const router = express.Router();
const { polygonPOST } = require('./controllers/polygonController');
const { flightGET } = require('./controllers/flightController');

router.post('/polygons', polygonPOST);
router.get('/flights/:polygonId', flightGET);

module.exports = router;