import {base64} from './base64'

export const globalIdUtils = {
  createGlobalId: ({typename, id}: {typename: string; id: string}) =>
    base64.encode(`${typename}---${id}`),
  decodeGlobalId: globalId => {
    const [typename, id] = base64.decode(globalId).split('---')
    return {
      typename,
      id,
    }
  },
}
