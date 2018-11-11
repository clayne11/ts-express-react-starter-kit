import {login} from 'code/client/createAuth'
import styled from 'code/client/ui/styles/styled-components'
import {RootPageQuery} from 'code/universal/graphql-types'
import React from 'react'
import {Query} from 'react-apollo'
import {RouteComponentProps} from 'react-router'
import QUERY from './RootPageQuery.graphql'

const Root = styled.div``

interface RootPageProps extends RouteComponentProps {}

const RootPage: React.SFC<RootPageProps> = React.memo(() => {
  const title = '123'
  return (
    <Query<RootPageQuery>
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
            <div>
              {data && data.foo
                ? data.foo.nodeId
                : `Couldn't find foo with title ${title}`}
            </div>
            <button
              {...{
                onClick: login,
              }}
            >
              Log in
            </button>
          </Root>
        )
      }
    </Query>
  )
})

export {RootPage}
