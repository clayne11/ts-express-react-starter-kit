import gql from 'graphql-tag'
import Foo from './types/Foo.graphql'

const Mutation = gql`
  extend type Mutation {
    createFoo(input: CreateFooInput!): Foo!
  }

  input CreateFooInput {
    title: String!
  }
`

export default () => [Mutation, Foo]
