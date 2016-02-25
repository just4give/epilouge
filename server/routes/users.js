var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/custom', function(req, res, next) {
  res.json({message:'custom hook'});
});

module.exports = router;
