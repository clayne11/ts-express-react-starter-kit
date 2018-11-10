import gql from 'graphql-tag'
import Foo from './types/Foo.graphql'

const Query = gql`
  extend type Query {
    findTest(title: String!): Foo
  }
`

export default () => [Query, Foo]
