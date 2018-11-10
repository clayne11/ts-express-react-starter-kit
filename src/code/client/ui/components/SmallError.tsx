import React from 'react'
import styled from 'code/client/ui/styles/styled-components'

const Root = styled.div``

interface SmallErrorProps {}

const SmallError: React.SFC<SmallErrorProps> = React.memo(() => (
  <Root>Something went wrong</Root>
))

export {SmallError}
