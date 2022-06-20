var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Донателло */
router.get('/don', function(req, res, next) {
  res.send("<h1>Страница Донателло</h1>")
});

/* Страница Рафаэль */
router.get('/raf', function(req, res, next) {
  res.send("<h1>Страница Рафаэля </h1>")
});

/* Страница Микеланджело */
router.get('/mike', function(req, res, next) {
  res.send("<h1>Страница Микеланджело</h1>")
});

/* Страница Леонардо */
router.get('/leo', function(req, res, next) {
  res.send("<h1>Страница Леонардо</h1>")
});
module.exports = router;
