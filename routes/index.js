var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Донателло */
router.get('/don', function(req, res, next) {
  res.render('hero', {
      title: "Донателло",
      picture: "images/don.jpg",
      desc: "Наш парень, с технологиями на ты, при помощи Scratch и калькулятора способен создать атомный манипулятор"
  });
});


/* Страница Рафаэль */
router.get('/raf', function(req, res, next) {
  res.render('hero', {
      title: " Рафаэль ",
      picture: "images/raf.jpg",
      desc: "Немного нервный, но все же добрый и справедливый чело... чепепаха"
  });
});

/* Страница Микеланджело */
router.get('/mike', function(req, res, next) {
  res.render('hero', {
      title: "Микеланджело ",
      picture: "images/mike.jpg",
      desc: "Весельчак, рядом с ним всегда происходит что то странное"
  });
});

/* Страница Леонардо */
router.get('/leo', function(req, res, next) {
  res.render('hero', {
      title: "Леонардо",
      picture: "images/leo.jpg",
      desc: "Прирожденный лидер"
  });
});
module.exports = router;
