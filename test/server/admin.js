/*
tests remaining
-approving story
-getting approved stories
-updating story
-approving story
-deleting story
-update user role
-deleteing user
*/

/*
describe('that are approved', () => {

  beforeEach((done) => {
    Story.remove({}, err => done() )
  })

  it('should retun an approved story', (done) => {
    let newStory = new Story(myStory);
    newStory.save((err, story) => {
      if(err){ console.log(err) }
      chai.request(server)
        .put(`api/admin`)
        .set('authorization':)
      chai.request(server)
      .get(`${stem}/?page=1&limit=10&status=Pending`)
      .end((err, res) => {
        res.body.content[0].should.have.property('title')
        res.body.content[0].should.have.property('body')
        res.body.content[0].status.should.be.eql('Approved')
        done()
      })
    })
  })
  */
