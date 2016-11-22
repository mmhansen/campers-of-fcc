import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import UserModel from '../../../models/UserModel'
import StoryModel from '../../../models/PostModel'
import UserType from '../../types/user'
var ObjectId = require('mongoose').Types.ObjectId;

export default {
  name: "me",
  description: "returns object belonging to currently logged in user",
  type: UserType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  async resolve (root, params, options) {
    const user = await UserModel.findById(params.id).exec()
    const myStories = await StoryModel.find({posted_by: ObjectId(params.id)}).exec()
    user.submitted_stories = myStories

    return user
  }
}
