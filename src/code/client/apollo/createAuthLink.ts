import {setContext} from 'apollo-link-context'
import {base64} from 'code/universal/utils/base64'

interface AuthLinkParams {
  basicAuth?: {
    username: string
    password: string
  }
  getLoginToken: () => Promise<string | null> | string | null
}

export const getBasicAuthHeaders = async ({
  basicAuth,
  getLoginToken,
}: AuthLinkParams) => {
  let basicAuthHeader
  if (basicAuth) {
    const {username, password} = basicAuth
    const encoded = base64.encode(`${username}:${password}`)
    basicAuthHeader = `Basic ${encoded}`
  }

  const currentUserToken = await getLoginToken()

  return {
    'X-GraphQLAuthorization': currentUserToken,
    Authorization: basicAuthHeader,
  }
}

export const createAuthLink = ({basicAuth, getLoginToken}: AuthLinkParams) => {
  const middlewareLink = setContext(async () => {
    const headers = await getBasicAuthHeaders({basicAuth, getLoginToken})

    return {
      headers,
    }
  })

  return middlewareLink
}
