import {push as reduxPush} from 'react-router-redux'
import {replace as reduxReplace} from 'react-router-redux'
import {stringify} from 'qs'

export const push = locationOrString => {
  if (typeof locationOrString === 'string') {
    return reduxPush(locationOrString)
  }
  const {query, search, ...location} = locationOrString
  return reduxPush({
    ...location,
    search: query ? stringify(query) : search,
  })
}

export const replace = locationOrString => {
  if (typeof locationOrString === 'string') {
    return reduxReplace(locationOrString)
  }
  const {query, search, ...location} = locationOrString
  return reduxReplace({
    ...location,
    search: query ? stringify(query) : search,
  })
}
