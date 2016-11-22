import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql'

import StoryType from './story'

export default new GraphQLObjectType({
  name: "User",
  description: "User Type",
  fields: () => ({
    username: {
      type: GraphQLString,
      resolve: (user) => `${user.firstName} ${user.lastName}`
    },
    _id: {
      type: GraphQLID
    },
    submitted_stories: {
      type: new GraphQLList(StoryType)
    }
  })
})
