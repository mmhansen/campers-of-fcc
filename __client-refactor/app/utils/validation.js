const emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(io|xyz|fr|cn|ca|us|dz||aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&-])[A-Za-z\d$@$!%*#?&-]{8,}$/
const urlPattern = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/

exports.validateRegister = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required"
    } else if (!emailPattern.test(data.email)) {
      errors.email = "Email is invalid"
    }

    if (!data.firstName || data.firstName.length < 2) {
      errors.firstName = "First name is required and must be at least 1 letter"
    }

    if (!data.lastName || data.lastName.length < 2) {
      errors.lastName = "Last name is required and must be at least 1 letter"
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
exports.validatePost = (data) => {

  let errors = {}

  if (!data.title) {
    errors.title = "The title is required. Please provide a title for the story."
  } else if (data.title.length < 5) {
    errors.title = "The title should be at least 5 letters long."
  }

  if (!data.image) {
    errors.image = "You need to provide a url to where your image is stored"
  } else if (!urlPattern.test(data.image)) {
    errors.image = "This needs to be a url (ex: http://findhere.com/image)"
  }

  if (!data.body || data.body.length < 100) {
    errors.body = "The story text is too short!"
  }




  return errors
}
