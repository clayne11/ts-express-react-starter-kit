import gql from 'graphql-tag'

const BaseTypes = gql`
  type Query {
    # Not really used but needed a base Query to extend
    version: Int
  }

  type Mutation {
    # Not really used but needed a base Mutation to extend
    version: Int
  }

  type Subscription {
    # Not really used but needed a base Subscription to extend
    version: Int
  }
`

export default () => [BaseTypes]
