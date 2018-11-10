import gql from 'graphql-tag'

const Foo = gql`
  type Foo {
    nodeId: ID!
    _id: ID!
    title: String!
  }
`

export default () => [Foo]
