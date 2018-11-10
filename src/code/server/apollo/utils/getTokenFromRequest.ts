export const getTokenFromRequest = ({request}) =>
  request.headers['x-graphqlauthorization'] || request.headers.authorization
