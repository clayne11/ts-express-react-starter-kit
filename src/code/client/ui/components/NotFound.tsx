import React from 'react'
import styled from 'code/client/ui/styles/styled-components'
import {Link} from 'react-router-dom'

const Root = styled.div``

interface NotFoundProps {}

const NotFound: React.SFC<NotFoundProps> = React.memo(() => (
  <Root>
    <div>We couldn't find what you were looking for</div>
    <Link
      {...{
        to: '/',
      }}
    >
      Go home
    </Link>
  </Root>
))

export {NotFound}
