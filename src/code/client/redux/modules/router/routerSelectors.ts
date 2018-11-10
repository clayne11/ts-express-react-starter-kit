import {LocationDescriptorObject} from 'history'
import {createSelector} from 'reselect'
import {parse} from './utils'

const getAll = state => state.router

export const currentLocation = createSelector(
  getAll,
  (routerProps): LocationDescriptorObject & {query: {[x: string]: any}} => {
    const {location} = routerProps
    return {
      ...location,
      query: parse(location.search),
    }
  }
)

export const currentLocationWithoutState = createSelector(
  currentLocation,
  ({state: _state, ...location}) => {
    return location
  }
)
