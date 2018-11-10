import {TestModel} from '../model/testSchema'

export default {
  Mutation: {
    createTest: async (_, {input}) => {
      const test = await TestModel.create(input)
      return test
    },
  },
}
