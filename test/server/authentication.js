import mongoose from 'mongoose';
import User from '../../server/models/UserModel'
import chai, { should } from 'chai'
import chaiHttp from 'chai-http'
import server from '../../server/app'
should();

chai.use(chaiHttp);


describe('Logging in', () => {

  let stem = '/api/auth'
  let michael = {
    password: 'o7Pk9mYFGhWaYC',
    firstName: 'Michael',
    lastName: 'Hansen',
    email: 'test@gmail.com'
  }

  describe('with good credentials', () => {

    beforeEach((done) => {
      User.remove({}, err => done() )
    })

    it('should return user name and role', (done) => {
      let newUser = new User(michael)
      newUser.save((err) => {
        if (err) { return done(err) }
        chai.request(server)
          .post(`${stem}/login`)
          .send({ password: michael.password, email: michael.email })
          .end((err, res) => {
            res.body.should.be.a('object')
            res.body.should.have.property('user')
            res.body.user.should.have.property('firstName')
            res.body.user.should.have.property('lastName')
            res.body.user.should.have.property('role')
            done()
          })
      })
    })

    it('should return jwt', (done) => {
      let newUser = new User(michael)
      newUser.save((err) => {
        if (err) { return done(err) }
        chai.request(server)
          .post(`${stem}/login`)
          .send({ password: michael.password, email: michael.email })
          .end((err, res) => {
            res.body.should.be.a('object')
            res.body.should.have.property('token')
            done()
          })
      })
    })
    // end good credentials describe
  })

  describe('with invalid password', () => {
    beforeEach((done) => {
      User.remove({}, err => done() )
    })

    it('should return error', (done) => {
      chai.request(server)
        .post(`${stem}/login`)
        .send({ password: michael.password, email: michael.email })
        .end((err, res) => {
          res.body.should.be.a('object')
          res.error.text.should.be.eql('Unauthorized')
          res.error.status.should.be.eql(401)
          done()
        })
    })
  })
  describe('with invalid email', () => {
    beforeEach((done) => {
      User.remove({}, err => done() )
    })

    it('should return error', (done) => {
      chai.request(server)
        .post(`${stem}/login`)
        .send({ password: michael.password, email: michael.email })
        .end((err, res) => {
          res.body.should.be.a('object')
          res.error.text.should.be.eql('Unauthorized')
          res.error.status.should.be.eql(401)
          done()
        })
    })
  })
  describe('with empty password or email', () => {
    it('should return bad request', (done) => {
      chai.request(server)
      .post(`${stem}/login`)
      .send({ })
      .end((err, res) => {
        res.body.should.be.a('object')
        res.error.status.should.be.eql(400)
        res.error.text.should.be.eql('Bad Request')
        done()
      })
    })
  })
  // end login describe
})

describe('register with', () => {

    let stem = '/api/auth'
    let michael = {
      password: 'o7Pk9mYFGhWaYC',
      firstName: 'Michael',
      lastName: 'Hansen',
      email: 'test@gmail.com'
    }

  describe('all fields filled in', () => {
    beforeEach((done) => {
      User.remove({}, (err) => done() )
    })
    it('should return a token', (done) => {
      chai.request(server)
      .post(`${stem}/register`)
      .send(michael)
      .end((err, res) => {
        res.body.should.be.a('object')
        res.body.should.have.property('token')
        done()
      })
    })
    it('should return a username and role', (done) => {
      chai.request(server)
      .post(`${stem}/register`)
      .send(michael)
      .end((err, res) => {
        res.body.should.be.a('object')
        res.body.user.should.have.property('role')
        res.body.user.should.have.property('firstName')
        res.body.user.should.have.property('lastName')
        done()
      })
    })
  })
  describe('missing a field', () => {
    beforeEach((done) => {
      User.remove({}, (err) => done() )
    })
    it('should return bad request', (done) => {
      chai.request(server)
        .post(`${stem}/register`)
        .send({ password: michael.password, email: michael.email })
        .end((err, res) => {
          res.body.should.be.a('object')
          res.error.text.should.eql('{"message":"User validation failed","error":{}}')
          res.error.status.should.be.eql(500)
          done()
        })
    })
  })
  describe('a taken email', () => {
    beforeEach((done) => {
      User.remove({}, err => done() )
    })
    it('should return "Email already exists"', (done) => {
      let newUser = new User(michael)
      newUser.save((err) => {
        chai.request(server)
        .post(`${stem}/register`)
        .send(michael)
        .end((err, res) => {
          res.body.should.be.a('object')
          res.body.should.have.property('error')
          res.body.error.should.be.eql('Email already exists')
          done()
        })
      })
    })
  })
  // end registering describe
})
