import gql from 'graphql-tag'
import Test from './types/Test.graphql'

const Mutation = gql`
  extend type Mutation {
    changeFoo: Test!
  }
`

export default () => [Mutation, Test]
