import {TestModel} from '../model/testSchema'

export default {
  Query: {
    findTest: async (_, {title}) => {
      const test = await TestModel.findOne({
        title,
      })
      return test
    },
  },
}
