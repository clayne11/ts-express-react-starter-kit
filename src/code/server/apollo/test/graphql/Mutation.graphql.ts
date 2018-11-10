import gql from 'graphql-tag'
import Test from './types/Test.graphql'

const Mutation = gql`
  extend type Mutation {
    createTest(input: CreateTestInput!): Test!
  }

  input CreateTestInput {
    title: String!
  }
`

export default () => [Mutation, Test]
