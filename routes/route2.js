var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

router.get('/all', function(req, res, next) {
        res.send(colors.colors);
});

router.get('/:color', function(req, res, next) {
	for (var i in colors.colors) {
    	if(colors.colors[i].color == req.params.color.toLowerCase()) {
    		res.send(colors.colors[i]);
    	} 
  	}
	res.status(404).send("Color not found: 404 Error");
});

module.exports = router;