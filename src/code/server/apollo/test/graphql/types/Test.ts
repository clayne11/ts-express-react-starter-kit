import {globalIdUtils} from 'code/universal/utils/globalIdUtils'

export default {
  Test: {
    nodeId: test =>
      globalIdUtils.createGlobalId({
        typename: 'Test',
        id: test._id,
      }),

    _id: test => {
      return test._id.toString()
    },
  },
}
