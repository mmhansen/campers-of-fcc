import faker from 'faker'
import mongoose from 'mongoose'
import Story from './server/models/PostModel'
import User from './server/models/UserModel'
import config from 'config'

mongoose.connect(config.mongodb)

Story.count({}, (err, count) => {

  if (count === 0) {
    User.findOne((err, user) => {
      for (let i = 0; i < 100; i++) {
        let post = {
          title: faker.random.words(),
          body: faker.lorem.paragraph(),
          image: faker.image.imageUrl(),
          postedBy: user._id,
        }
        if (i % 2 === 0){
          post.status= "Pending"
        } else {
          post.status= "Approved"
        }

        let newStory = new Story(post)
        newStory.save((err, story) => {
          console.log(story.title)
          if (i === 99) mongoose.disconnect()
        })
      }
    })
  } else {
    mongoose.disconnect();
  }
})
