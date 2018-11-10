import gql from 'graphql-tag'

const Test = gql`
  type Test {
    nodeId: ID!
    _id: ID!
    title: String!
  }
`

export default () => [Test]
