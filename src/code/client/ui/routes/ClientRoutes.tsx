import {RootPage} from 'code/client/ui/components/RootPage'
import {GlobalStyles} from 'code/client/ui/styles/GlobalStyles'
import React from 'react'
import {Route, Switch} from 'react-router'
import {SimpleLayout} from './SimpleLayout'
import {ThemeConsumer} from 'code/client/ui/styles/styled-components'

export const ClientRoutes = React.memo(() => (
  <SimpleLayout>
    <ThemeConsumer>
      {theme => (
        <GlobalStyles
          {...{
            theme,
          }}
        />
      )}
    </ThemeConsumer>
    <Switch>
      <Route
        {...{
          path: '/',
          exact: true,
          render: props => <RootPage {...props} />,
        }}
      />
    </Switch>
  </SimpleLayout>
))
