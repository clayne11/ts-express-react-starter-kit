import {ApolloClient} from 'apollo-client'
import React from 'react'
import {ApolloProvider} from 'react-apollo'
import {Provider as ReactReduxProvider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {toClass} from 'recompose'
import {Store} from 'redux'
import {ThemeProvider} from 'code/client/ui/styles/styled-components'
import {styleTheme} from 'code/client/ui/styles/styleTheme'

interface RootContainerProps {
  apolloClient: ApolloClient<any>
  appHistory: any
  ClientRoutes: React.ComponentType<any>
  store: Store<any>
}

const RootContainer: React.StatelessComponent<RootContainerProps> = ({
  apolloClient,
  appHistory,
  ClientRoutes,
  store,
  ...rest
}) => {
  return (
    <ReactReduxProvider {...{store}}>
      <ApolloProvider
        {...{
          client: apolloClient,
          ...rest,
        }}
      >
        <ThemeProvider {...{theme: styleTheme}}>
          <ConnectedRouter {...{history: appHistory}}>
            <ClientRoutes />
          </ConnectedRouter>
        </ThemeProvider>
      </ApolloProvider>
    </ReactReduxProvider>
  )
}

export default toClass(RootContainer)
