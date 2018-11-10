import {SubscribeToMoreOptions} from 'apollo-client'
import React from 'react'
import {
  Query as ApolloQuery,
  QueryProps as ApolloQueryProps,
  QueryResult as ApolloQueryResult,
} from 'react-apollo'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type QueryResult<TData> = Omit<
  ApolloQueryResult<TData>,
  'subscribeToMore'
>

export interface SubscribeToMoreProps<TData> {
  children: (props: QueryResult<TData>) => React.ReactNode
  subscribeToMoreOptions?: Array<SubscribeToMoreOptions>
  skip?: ApolloQueryProps['skip']
}
class SubscribeToMore<TData> extends React.PureComponent<
  SubscribeToMoreProps<TData> & ApolloQueryResult<TData>
> {
  private unsubscribeFuncs = []

  componentDidMount() {
    const {subscribeToMore, subscribeToMoreOptions} = this.props
    if (subscribeToMoreOptions && subscribeToMoreOptions.length) {
      subscribeToMoreOptions.forEach(subOpt => {
        this.unsubscribeFuncs.push(subscribeToMore(subOpt))
      })
    }
  }

  componentWillUnmount() {
    this.unsubscribeFuncs.forEach(func => func())
    this.unsubscribeFuncs = []
  }

  render() {
    const {
      children,
      subscribeToMore,
      data,
      loading,
      skip,
      ...otherRenderProps
    } = this.props

    const renderProps = {
      ...otherRenderProps,
      // There is a bug in react-apollo where "loading" will be stuck as true
      // when skip is true. See: https://github.com/apollographql/react-apollo/issues/1869
      loading: skip ? false : loading,
      // There is a bug in react-apollo where "data" will retain its previous value
      // when skip is true.
      data: skip ? undefined : data,
    }

    return children(renderProps)
  }
}

export type QueryProps<TData> = Omit<ApolloQueryProps, 'children' | 'skip'> &
  SubscribeToMoreProps<TData>
class Query<TData> extends React.PureComponent<QueryProps<TData>> {
  render() {
    const {
      children,
      subscribeToMoreOptions,
      skip,
      fetchPolicy,
      pollInterval,
      ...queryProps
    } = this.props
    return (
      <ApolloQuery<TData>
        {...{
          skip,
          fetchPolicy,
          // When apollo client is configured to use cache-only or cache-first,
          // the poll interval cannot be set or it would error out.
          pollInterval:
            fetchPolicy === 'cache-only' || fetchPolicy === 'cache-first'
              ? undefined
              : pollInterval,
          ...queryProps,
        }}
      >
        {renderProps => (
          <SubscribeToMore
            {...{
              ...renderProps,
              skip,
              subscribeToMoreOptions,
              children,
            }}
          />
        )}
      </ApolloQuery>
    )
  }
}

export {Query}
