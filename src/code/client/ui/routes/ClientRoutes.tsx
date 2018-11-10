import {NotFound} from 'code/client/ui/components/NotFound'
import {OtherPage} from 'code/client/ui/components/OtherPage'
import {RootPage} from 'code/client/ui/components/RootPage'
import {GlobalStyles} from 'code/client/ui/styles/GlobalStyles'
import {ThemeConsumer} from 'code/client/ui/styles/styled-components'
import React from 'react'
import {Route, Switch} from 'react-router'
import {SimpleLayout} from './SimpleLayout'

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
      <Route
        {...{
          path: '/foo/:title',
          render: props => <OtherPage {...props} />,
        }}
      />
      <Route
        {...{
          render: props => <NotFound {...props} />,
        }}
      />
    </Switch>
  </SimpleLayout>
))
