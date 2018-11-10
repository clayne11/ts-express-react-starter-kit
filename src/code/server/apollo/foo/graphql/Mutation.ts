import {FooModel} from '../model/fooSchema'

export default {
  Mutation: {
    createFoo: async (_, {input}) => {
      const foo = await FooModel.create(input)
      return foo
    },
  },
}
