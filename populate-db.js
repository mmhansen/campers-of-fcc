import faker from 'faker'
import mongoose from 'mongoose'
import Story from './server/models/PostModel'
import config from './server/conf/main'


mongoose.connect(config.mongodb)

Story.count({}, (err, count) => {
  if (count === 0) {


    for (let i = 0; i < 50; i++) {
        let post = {
          title: faker.random.words(),
          body: faker.lorem.paragraph(),
          image: faker.image.imageUrl(),
          postedBy: "57fbfb539b783b13cf8e2568",
          status: "Approved"
        }

        let newStory = new Story(post)
        newStory.save((err, story) => {
          console.log(story.title)
        })
    }
  }
})
