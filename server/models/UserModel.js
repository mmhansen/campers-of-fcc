/*
 * Dependencies
 */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

/*
 * Schema
 */
var userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  },
  role: {
    type: String,
    enum: ['Member', 'Admin'],
    default: 'Admin'
  }
});

/*
 * Password encryption
 */
let SALT_FACTOR = 10;

let noop = () => {}

userSchema.pre("save", function(done){
  var user = this;
  // only hash password if it has been modified
  if (!user.isModified("password")) { return done(); }
  // make the hacker salty
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) { return done(err); }
    // hash the password
    bcrypt.hash(user.password, salt, noop, function(err, hashedPassword) {
      if (err) { return done(err); }
      user.password = hashedPassword;
      done();
    });
  });
});

/*
 * Check password method
 */
userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    if (err) { return done(err); }
    done(null, isMatch); // match -> respond with no errs
  });
};

/*
 * Export User
 */
let User = mongoose.model("User", userSchema)
export default User
