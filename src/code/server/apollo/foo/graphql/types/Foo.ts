import {globalIdUtils} from 'code/universal/utils/globalIdUtils'

export default {
  Foo: {
    nodeId: test =>
      globalIdUtils.createGlobalId({
        typename: 'Foo',
        id: test._id,
      }),

    _id: test => {
      return test._id.toString()
    },
  },
}
