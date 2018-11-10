import {makeExecutableSchema} from 'graphql-tools'
import {modules} from '../modules'

describe('GraphQL schema', () => {
  it('should compile', () => {
    expect(() => makeExecutableSchema(modules)).not.toThrow()
  })
})
