import styled from 'code/client/ui/styles/styled-components'
import {OtherPageQuery} from 'code/universal/graphql-types'
import React from 'react'
import {Query} from 'react-apollo'
import {RouteComponentProps} from 'react-router'
import QUERY from './OtherPageQuery.graphql'

const Root = styled.div``

interface OtherPageProps
  extends RouteComponentProps<{
      title: string
    }> {}

const OtherPage: React.SFC<OtherPageProps> = React.memo(({match}) => {
  return (
    <Query<OtherPageQuery>
      {...{
        query: QUERY,
        variables: {
          title: match.params.title,
        },
      }}
    >
      {({data, loading}) =>
        loading ? (
          'Loading...'
        ) : (
          <Root>
            {data && data.foo
              ? data.foo.nodeId
              : `Couldn't find foo with title ${match.params.title}`}
          </Root>
        )
      }
    </Query>
  )
})

export {OtherPage}
