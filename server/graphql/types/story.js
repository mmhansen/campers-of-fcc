import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql'

import StatusEnumType from './status_enum'
import UserType from './user'

export default new GraphQLObjectType({
  name: "Story",
  description: "Story Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (story) => story._id
    },
    date: {
      type: GraphQLString,
      resolve: (story) => story.created_at
    },
    body: {
      type: GraphQLString,
    },
    status: {
      type: StatusEnumType
    },
    author: {
      type: UserType,
      resolve: (story) => story.postedBy
    },
    image: {
      type: GraphQLString
    }
  })
})
