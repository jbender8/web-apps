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

router.get('/counter', function (req, res, next) {
  if (req.session.count !== undefined) {
    req.session.count++;
    res.send("Welcome back, this your vistit number " + req.session.count);
  } else {
    req.session.count = 0;
    res.send("Hi there, welcome aboard!");
  }
})

module.exports = router;
