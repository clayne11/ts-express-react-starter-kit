import {RootPage} from 'code/client/ui/components/RootPage'
import React from 'react'
import {Route, Switch} from 'react-router'
import {SimpleLayout} from './SimpleLayout'

export const ClientRoutes = React.memo(() => (
  <SimpleLayout>
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
