import gql from 'graphql-tag'
import Test from './types/Test.graphql'

const Subscription = gql`
  extend type Subscription {
    onFooChange: Test
  }
`

export default () => [Subscription, Test]
