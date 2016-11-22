import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'

import StoryModel from '../../../models/PostModel'
import StoryType from '../../types/story'


export default {
  name: "New_Story",
  description: "Create a new story",
  type: StoryType,
  args: {
    posted_by: {
      type: GraphQLID
    },
    body: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    }
  },
  async resolve (root, params, options) {
    const newStory = StoryModel(params)
    return await newStory.save()
  }
}
