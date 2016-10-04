var express = require('express');
var User = require('../models/UserModel');
var router = express.Router();
var Validator = require('validator');
var isEmpty = require('lodash/isEmpty');

function validateInput(data) {
  var errors = {};
  // validate email
  if (Validator.isNull(data.email)) {
    errors.email = "This field is required";
  }
  if (!Validator.isEmail(data.email)){
    errors.email = "Email is invalid"
  }
  // validate passwords
  if (Validator.isNull(data.password)) {
    errors.password = "This field is required";
  }
  if (Validator.isNull(data.passwordConfirmation)) {
    errors.passwordConfirmation = "This field is required";
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)){
    errors.passwordConfirmation = "Passwords must match"
  }
  // validate username
  if (Validator.isNull(data.username)) {
    errors.username = "This field is required";
  }
  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', function(req, res){
  var errors = validateInput(req.body).errors;
  var isValid = validateInput(req.body).isValid;
  // if isValid is not an empty object, log error
  if (!isValid) {
      res.status(400).json(errors)
  }
  console.log(req.body);

})



module.exports = router;
