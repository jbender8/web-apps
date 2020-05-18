var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
bs = "";
fetch('https://corporatebs-generator.sameerkumar.website/')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    bs = data['phrase']
  })



router.get('/', function (req, res, next) {

  res.render('index', {
    title: 'JessCorp',
    corporatebs: bs,
    wish: req.query.wish
  });
  router.post('/', function (req, res, next) {
    res.send(req.query.wish)
  })
});

module.exports = router;
