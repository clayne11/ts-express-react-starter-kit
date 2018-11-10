import gql from 'graphql-tag'
import Test from './types/Test.graphql'

const Query = gql`
  extend type Query {
    getTest: Test!
  }
`

export default () => [Query, Test]
