import {
  GraphQLEnumType
} from 'graphql'

export default new GraphQLEnumType({
  name: "Status",
  description: "Project Status",
  values: {
    Approved: {
      value: "Approved"
    },
    Pending: {
      value: "Pending"
    }
  }
})
