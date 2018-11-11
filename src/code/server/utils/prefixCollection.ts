/* global COLLECTION_PREFIX */

export const getCollectionPrefix = () => {
  if (process.env.COLLECTION_PREFIX) {
    return process.env.COLLECTION_PREFIX
  }

  return typeof COLLECTION_PREFIX !== 'undefined' ? COLLECTION_PREFIX : ''
}

export const prefixCollection = collection => getCollectionPrefix() + collection
