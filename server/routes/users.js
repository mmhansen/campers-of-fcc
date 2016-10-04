var express = require('express');
var User = require('../models/UserModel');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
  var params = req.body;
  // validate username
  // validate emails
  // validate password
  console.log("add req");
  var user = new User({
    username: params.username,
    email: params.email,
    password: params.password
  });

  user.save(function(err) {
    console.log('Errors');
  });

  return res.json(user);

});

module.exports = router;
