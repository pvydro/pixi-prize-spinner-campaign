var express = require('express');
var requirejs = require('requirejs');
var router = express.Router();


requirejs.config({
  nodeRequire: require
});

/* GET game page. */
router.get('/', function(req, res, next) {
  // send the rendered view to the client
  res.render('game.ejs');
});

module.exports = router;
