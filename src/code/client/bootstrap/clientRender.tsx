import Loadable from 'react-loadable'
import React from 'react'
import {render} from 'react-dom'

import RootContainer from './RootContainer'

export const clientRender = async ({
  apolloClient,
  appHistory,
  ClientRoutes,
  store,
}) => {
  const renderRouter = async ({component: Component}) => {
    const anchor = document.querySelector(`.RootNode`)
    await Loadable.preloadReady()

    render(
      <Component
        {...{
          apolloClient,
          appHistory,
          ClientRoutes,
          store,
        }}
      />,
      anchor
    )
  }

  await renderRouter({component: RootContainer})
}
