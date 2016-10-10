import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export function validateRegister(data){
    var errors = {};
    // validate email
    if (!validator.isEmail(data.email)){
      errors.email = "Email is invalid"
    }
    // validate passwords
    if (!validator.equals(data.password, data.passwordConfirmation)){
      errors.passwordConfirmation = "Passwords must match"
    }
    if (!validator.matches(data.password, /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)){
      errors.password = "Password must be atleast 8 characters, contain an uppercase, number and symbol"
    }
    // last name
    if (!validator.matches(data.lastName, /\w{5,}/)){
      errors.lastName = "Name must be atleast 5 letters"
    }
    // first name
    if (!validator.matches(data.firstName, /\w{5,}/)){
      errors.firstName = "Name must be atleast 5 letters"
    }

    // return {
    //   errors: errors,
    //   isValid: isEmpty(errors)
    // }
    return isEmpty(errors) ? {} : errors
}

export function vaidateLogin(){

}
export function validatePost(){

}
