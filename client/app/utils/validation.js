const emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/

exports.validateRegister = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required"
    } else if (!emailPattern.test(data.email)) {
      errors.email = "Email is invalid"
    }

    if (!data.firstName || data.firstName.length < 5) {
      errors.firstName = "First name is required and must be at least 5 letters"
    }

    if (!data.lastName || data.lastName.length < 5) {
      errors.lastName = "Last name is required and must be at least 5 letters"
    }

    if (!passwordPattern.test(data.password)) {
      errors.password = "Password must be at least 8 characters, contain an uppercase, number and symbol"
    }

    if (data.password !== data.passwordConfirmation) {
      errors.password = "Passwords must match"
      errors.passwordConfirmation = "Passwords must match"
    }


    return errors
}

exports.validateLogin = (data) => {

  let errors = {}

  if (!data.email) {
    errors.email = "Email is required"
  } else if (!emailPattern.test(data.email)) {
    errors.email = "Email is invalid"
  }

  if (!passwordPattern.test(data.password)) {
      errors.password = "Password must be at least 8 characters, contain an uppercase, number and symbol"
  }

  return errors

}
exports.validatePost = () => {

}
