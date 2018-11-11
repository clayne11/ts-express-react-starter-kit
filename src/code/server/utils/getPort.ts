/* globals PORT */

export const getPort = () =>
  typeof PORT !== 'undefined' ? PORT : process.env.PORT
