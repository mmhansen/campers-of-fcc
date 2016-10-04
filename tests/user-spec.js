var expect = require('chai').expect;
var request = require('supertest');
var app = require('../app');

describe('users', function() {

  var user = {
    username: "codejunky",
    email: "code@abc.com",
    passwordConfirmation: "123",
    password: "123"
  }

  it('should save a new user', function() {
    request(app)
      .post('/users/add')
      .send(user)
      .expect(201)
      .end(function(err, res) {
        expect(err).to.be.eql(null);
        expect(res).to.be.eql(user)
      });
  });

});
