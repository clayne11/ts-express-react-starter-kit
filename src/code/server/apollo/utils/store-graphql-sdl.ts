import fs from 'fs'
import {
  buildClientSchema,
  graphqlSync,
  introspectionQuery,
  IntrospectionQuery,
  printSchema,
} from 'graphql'
import {makeExecutableSchema} from 'graphql-tools'
import path from 'path'
import {modules} from '../modules'

const schema = makeExecutableSchema(modules)
const introspectionSchemaResult = graphqlSync(schema, introspectionQuery)
  .data as IntrospectionQuery
const graphqlSchemaObj = buildClientSchema(introspectionSchemaResult)
const sdlString = printSchema(graphqlSchemaObj)

fs.writeFileSync(
  path.join(__dirname, '../../../universal/graphql-schema.json'),
  JSON.stringify(introspectionSchemaResult)
)
fs.writeFileSync(
  path.join(__dirname, '../../../universal/graphql-schema.graphql'),
  sdlString
)
