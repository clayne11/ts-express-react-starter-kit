import {Foo} from '../model/fooSchema'

export default {
  Query: {
    findFoo: async (_, {title}) => {
      const foo = await Foo.findOne({
        title,
      })
      return foo
    },
  },
}
