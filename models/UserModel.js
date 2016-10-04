var mongoose =  require("mongoose");
var bcrypt = require("bcrypt-nodejs");

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  }
});

const SALT_FACTOR = 10;

userSchema.pre("save", function(done){
  var user = this;

  if (!user.isModified("password")) {
    return done();
  }
  // make the hacker salty
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if (err) { return done(err); }
    bcrypt.hash(user.password, salt, noop, function(err, hashedPassword) {
      if (err) { return done(err); }
      user.password = hashedPassword;
      done();
    });
  });
});

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model("user", userSchema);
