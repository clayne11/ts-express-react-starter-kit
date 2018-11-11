import {Foo} from '../model/fooSchema'

export default {
  Mutation: {
    createFoo: async (_, {input}) => {
      const foo = await Foo.create(input)
      return foo
    },
  },
}
