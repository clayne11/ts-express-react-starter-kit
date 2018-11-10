import React from 'react'
import {Switch, Route} from 'react-router'
import {SimpleLayout} from './SimpleLayout'

export const ClientRoutes = React.memo(() => (
  <SimpleLayout>
    <Switch>
      <Route
        {...{
          path: '/',
          exact: true,
          render: props => <div>Some stuff</div>,
        }}
      />
    </Switch>
  </SimpleLayout>
))
