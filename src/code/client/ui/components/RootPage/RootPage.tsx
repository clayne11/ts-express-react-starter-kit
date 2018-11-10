import React from 'react'
import styled from 'code/client/ui/styles/styled-components'
import {Query} from 'react-apollo'
import QUERY from './RootPageQuery.graphql'
import {RouteComponentProps} from 'react-router'

const Root = styled.div``

interface RootPageProps extends RouteComponentProps {}

const RootPage: React.SFC<RootPageProps> = React.memo(() => {
  const title = '123'
  return (
    <Query
      {...{
        query: QUERY,
        variables: {
          title,
        },
      }}
    >
      {({data, loading}) =>
        loading ? (
          'Loading...'
        ) : (
          <Root>
            {data.foo
              ? data.foo.nodeId
              : `Couldn't find foo with title ${title}`}
          </Root>
        )
      }
    </Query>
  )
})

export {RootPage}
