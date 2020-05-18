var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        "number": "well it's " + req.query.num
    })

    router.post('/', function (req, res, next) {
        res.send(req.query.num)
    })

})

module.exports = router;