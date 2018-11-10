import React from 'react'
import styled from 'code/client/styles/styled-components'

const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

interface SimpleLayoutProps {
  children: React.ReactNode
}

const SimpleLayout: React.SFC<SimpleLayoutProps> = React.memo(({children}) => (
  <Root>{children}</Root>
))

export default SimpleLayout
