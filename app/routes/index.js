var express = require("express");
var router = express.Router();

//GET HOME PAGE
router.get('/', function(req, res) {
    res.redirect('/catalog');
})

module.exports = router;