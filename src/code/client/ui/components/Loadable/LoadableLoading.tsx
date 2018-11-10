import {Loading} from 'code/client/ui/components/Loading'
import {SmallError} from 'code/client/ui/components/SmallError'
import styled from 'code/client/ui/styles/styled-components'
import React from 'react'
import {LoadingComponentProps} from 'react-loadable'

const TimedOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: ${props => props.theme.spacing.base * 4}px;
`

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: ${props => props.theme.spacing.base * 4}px;
`

const LoadableLoading: React.SFC<LoadingComponentProps> = React.memo(
  ({isLoading, timedOut, error, pastDelay}) => {
    if (isLoading) {
      if (timedOut) {
        // In case we've timed out loading our other component.
        return (
          <TimedOut>
            <SmallError />
          </TimedOut>
        )
      } else if (pastDelay) {
        // Display a loading screen after a set delay.
        return <Loading />
      } else {
        return null
      }
    }

    if (error) {
      return (
        <Error>
          <SmallError />
        </Error>
      )
    }

    // This case shouldn't happen... but we'll return null anyways.
    return null
  }
)

export {LoadableLoading}
