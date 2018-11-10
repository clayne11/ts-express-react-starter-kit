import gql from 'graphql-tag'
import Foo from './types/Foo.graphql'

const Subscription = gql`
  extend type Subscription {
    onFooChange: Foo
  }
`

export default () => [Subscription, Foo]
