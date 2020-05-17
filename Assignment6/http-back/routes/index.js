var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'JessCorp', that: 'blahhh' });
});


router.get('/Jess', function (req, res, next) {
  res.json({
    "weather": "well it's " + req.query.fname
  })

  router.post('/Jess', function (req, res, next) {
    res.send("hi")
  })

})

module.exports = router;
