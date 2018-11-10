import {FooModel} from '../model/fooSchema'

export default {
  Query: {
    findFoo: async (_, {title}) => {
      const foo = await FooModel.findOne({
        title,
      })
      return foo
    },
  },
}
