var express = require('express')
var User = require('../models/UserModel')
var router = express.Router()
import { validateRegister } from '../shared/validation'

router.post('/', function(req, res){
  let { firstName, lastName, email, password, passwordConfirmation } = req.body
  let { errors, isValid } = validateRegister(req.body)

  if (!isValid) { res.status(400).json(errors) } // if validation fails -> return errors



})


module.exports = router
