var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
bs = "";
fetch('https://corporatebs-generator.sameerkumar.website/')
  .then(res => res.json())
  .then(data => {
    bs = data['phrase']
  })
wish = [];
router.post('/addwish', function (req, res, next) {
  var newWish = req.body.newwish;
  wish.push(newWish);
  res.redirect("/");
  // res.send(wish);
  console.log(wish)
});

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'JessCorp',
    corporatebs: bs,
    wish: wish
  });
});

module.exports = router;
