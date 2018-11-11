/* globals ROOT_URL */

export const getRootUrl = () =>
  typeof ROOT_URL !== 'undefined' ? ROOT_URL : process.env.ROOT_URL
