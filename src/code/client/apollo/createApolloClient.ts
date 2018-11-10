import {DefaultOptions} from 'apollo-client/ApolloClient'
import graphqlSchema from 'code/universal/graphql-schema.json'
import {createGenericApolloClient} from './createGenericApolloClient'

export default ({
  getStoredLoginToken,
  initialState,
  defaultOptions,
}: {
  getStoredLoginToken: () => Promise<string | null> | string | null
  initialState: {[x: string]: any}
  defaultOptions?: DefaultOptions
}) => {
  const uri = 'http://localhost:3000/graphql'
  const useSubscriptions = true

  return createGenericApolloClient({
    connectToDevTools: process.env.NODE_ENV !== 'production',
    defaultOptions,
    getLoginToken: getStoredLoginToken,
    graphqlSchema,
    initialState,
    ssrMode: false,
    uri,
    useSubscriptions,
  })
}
