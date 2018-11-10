import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory' // eslint-disable-line import/no-unresolved
import {toIdValue} from 'apollo-utilities' // eslint-disable-line import/no-unresolved
import {globalIdUtils} from 'code/universal/utils/globalIdUtils'

export const createApolloCache = ({graphqlSchema}: {graphqlSchema: any}) => {
  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: graphqlSchema.data,
  })

  const cache = new InMemoryCache({
    addTypename: true,
    cacheRedirects: {
      Query: {
        // allow a listing loaded by a list query to fetch
        // a listing from the cache if it exists
        // see https://www.apollographql.com/docs/react/features/cache-updates.html#cacheRedirect
        householdById: (_obj, {id}) =>
          toIdValue(
            cache.config.dataIdFromObject({
              nodeId: globalIdUtils.createGlobalId({
                typename: 'Household',
                id,
              }),
            })
          ),
      },
    },
    dataIdFromObject: (result: any) => {
      if (result.nodeId) {
        return result.nodeId
      }

      return null
    },
    fragmentMatcher,
  })
  return cache
}
