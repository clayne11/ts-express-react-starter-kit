import gql from 'graphql-tag'
import flattenDeep from 'lodash/flattenDeep'
import merge from 'lodash/merge'
import BaseTypes from './BaseTypes'
import BASE_TYPES from './BaseTypes.graphql'

type TypeDef =
  | Array<any>
  | (() => any)
  | (() => Array<any>)
  | string
  | {[index: string]: any}
interface Resolver {
  [index: string]: any
}
type Resolvers = Array<Resolver> | Resolver

interface GraphQLModule {
  typeDefs?: TypeDef
  resolvers?: Resolvers
}

export function mergeModules(modules: Array<GraphQLModule> = []) {
  const mergedTypeDefs = modules
    .filter(({typeDefs}) => typeDefs)
    .map(({typeDefs}) => typeDefs!)

  const mergedResolvers = mergeResolvers([
    BaseTypes,
    ...modules
      .filter(({resolvers}) => resolvers)
      .map(({resolvers}) => resolvers!),
  ])
  return {
    typeDefs: flattenDeep([BASE_TYPES, mergedTypeDefs]),
    resolvers: mergedResolvers,
  }
}

const processedTypeDefs = new Set()

const typeDefsToGql = (typeDefs: TypeDef = []) => {
  // since we can have circular dependencies in our modules
  // ensure we only process each module once
  if (processedTypeDefs.has(typeDefs)) {
    return null
  }

  processedTypeDefs.add(typeDefs)

  if (Array.isArray(typeDefs)) {
    return typeDefs.map(typeDef => typeDefsToGql(typeDef))
  }

  if (typeof typeDefs === 'function') {
    return typeDefsToGql(typeDefs())
  }

  if (typeof typeDefs === 'string') {
    return gql`
      ${typeDefs}
    `
  }

  return typeDefs
}

const mergeResolvers = (resolvers: Array<Resolver> = []) => {
  return resolvers.reduce((acc, curResolvers) => {
    if (Array.isArray(curResolvers)) {
      return merge(acc, mergeResolvers(curResolvers))
    }
    return merge(acc, curResolvers)
  }, {})
}
