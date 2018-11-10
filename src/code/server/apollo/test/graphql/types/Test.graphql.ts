import gql from 'graphql-tag'

const Test = gql`
  type Test {
    star: Int
  }
`

export default () => [Test]
