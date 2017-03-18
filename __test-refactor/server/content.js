import mongoose from 'mongoose'
import chai, { should } from 'chai'
import Story from '../../server/models/PostModel'
import chaiHttp from 'chai-http'
import server from '../../server/app'
import User from '../../server/models/UserModel'
should();

chai.use(chaiHttp)
/*
let michael = {
  password: 'o7Pk9mYFGhWaYC',
  firstName: 'Michael',
  lastName: 'Hansen',
  email: 'test@gmail.com'
}
*/

describe('submitting a story', () => {

  let stem = '/api/content'
  let myStory = {
    title: 'My cool title',
    body: 'My cool story',
    image: 'My super cool imgage url',
    postedBy: '5815275786209c3181b9e401'
  }

  describe('that has all fields', () => {
    beforeEach((done) => {
      Story.remove({}, err => done() )
    })
    it('should save successfully', (done) => {
      chai.request(server)
        .post(stem)
        .send(myStory)
        .end((err, res) => {
          res.body.should.be.a('object')
          res.statusCode.should.be.eql(201)
          done()
        })
    })
  })
  describe('that is missing a field', () => {
    beforeEach((done) => {
      Story.remove({}, err => done() )
    })
    it('should return bad request', (done) => {
      chai.request(server)
        .post(stem)
        .send({ title: myStory.title })
        .end((err, res) => {
          res.status.should.eql(400)
          res.error.text.should.be.eql('{"error":"Bad Request"}')
          done()
        })
    })
  })
  // end submitting describe
})
describe('requesting stories', () => {

  let stem = '/api/content'
  let myStory = {
    title: 'My cool title',
    body: 'My cool story',
    image: 'My super cool imgage url',
    postedBy: '5815275786209c3181b9e401'
  }

  describe('that are pending approval', () => {

    beforeEach((done) => {
      Story.remove({}, err => done() )
    })

    it('should retun an unapproved story', (done) => {
      let newStory = new Story(myStory);
      newStory.save((err, story) => {
        if(err){ console.log(err) }
        chai.request(server)
        .get(`${stem}/?page=1&limit=10&status=Pending`)
        .end((err, res) => {
          res.body.content[0].should.have.property('title')
          res.body.content[0].should.have.property('body')
          res.body.content[0].status.should.be.eql('Pending')
          done()
        })
      })
    })
  })
  // end requesting describe
})

describe('requesting story count', () => {
  let stem = '/api/content'
  let myStory = {
    title: 'My cool title',
    body: 'My cool story',
    image: 'My super cool imgage url',
    postedBy: '5815275786209c3181b9e401'
  }

  beforeEach((done) => {
    Story.remove({}, err => done() )
  })

  it('should return total number of stories', (done) => {
    chai.request(server)
      .get(`${stem}/count`)
      .end((err, res) => {
        res.body.count.should.be.eql(0)
        done()
      })
  })
})
