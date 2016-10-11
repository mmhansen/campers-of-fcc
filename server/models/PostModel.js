import mongoose, { Schema } from 'mongoose';

/*
 * Schema
 */

const StorySchema = new Schema({
  name: {
    type: String,
    requried: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Pending', 'Approved'],
    default: 'Pending'
  }
})

let Story = mongoose.model('story', StorySchema)
export default Story
