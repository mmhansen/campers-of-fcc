import faker from 'faker'
import mongoose from 'mongoose'
import Story from './server/models/PostModel'
import config from './server/conf/main'


mongoose.connect(config.mongodb)

Story.count({}, (err, count) => {



    for (let i = 0; i < 100; i++) {
        let post = {
          title: faker.random.words(),
          body: faker.lorem.paragraph(),
          image: faker.image.imageUrl(),
          postedBy: "58023fb7a5dc254ec2d5b559",
        }
        if (i % 2 === 0){
          post.status= "Pending"
        } else {
          post.status= "Approved"
        }

        let newStory = new Story(post)
        newStory.save((err, story) => {
          console.log(story.title)
        })
    }

})
