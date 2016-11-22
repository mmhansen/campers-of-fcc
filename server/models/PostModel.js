import mongoose, { Schema } from 'mongoose';

/*
 * Schema
 */

const StorySchema = new Schema({
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  posted_by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved'],
    default: 'Pending'
  },
  created_at: {
    type: Date,
    default: new Date()
   }
})

let Story = mongoose.model('story', StorySchema)
export default Story
