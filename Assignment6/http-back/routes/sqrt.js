var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    // console.log('hello')
    if (req.query.num == undefined || req.query.num == "") {
        res.status(400).send("<h1>400 error.</h1> <br> Need a query. <br> Please enter something like http://localhost:3000/sqrt?num=9</p >");
    } else if (isNaN(Math.sqrt(req.query.num))) {
        res.status(400).send("<h1>400 error.</h1> <p> Must be a posivive number. <br> You entered '" + req.query.num + "'.<br> Please enter something like http://localhost:3000/sqrt?num=9</p>");
    } else {
        res.json({
            "result": Math.sqrt(req.query.num)
        })
    }

})

// router.post('/', function (req, res, next) {
//     res.send(req.query.num)
// })

module.exports = router;