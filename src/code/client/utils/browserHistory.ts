import {createBrowserHistory} from 'history'
import {stringify} from 'qs'

const mapQueryToSearch = ({query, search, ...location}) => ({
  ...location,
  search: query ? stringify(query) : search,
})

const createHistory = () => {
  const history = createBrowserHistory()
  const push = history.push
  history.push = function(location, state) {
    const calculatedLocation =
      typeof location === 'string' ? location : mapQueryToSearch(location)

    return push(calculatedLocation, state)
  }

  const replace = history.replace
  history.replace = function(location, state) {
    const calculatedLocation =
      typeof location === 'string' ? location : mapQueryToSearch(location)

    return replace(calculatedLocation, state)
  }

  return history
}

export const browserHistory = createHistory()
