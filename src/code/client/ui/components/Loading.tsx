import React from 'react'
import styled from 'code/client/ui/styles/styled-components'

const Root = styled.div`
  flex: 1;
`

interface LoadingProps {}

const Loading: React.SFC<LoadingProps> = React.memo(() => (
  <Root>Loading...</Root>
))

export {Loading}
