import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {Store} from 'redux'
import set from 'lodash/set'
import has from 'lodash/has'

export const createReduxInjector = () => {
  let store: Store<any> | null = null
  let combine = combineReducers
  let injectedReducers = {}

  const combineReducersRecurse = reducers => {
    // If this is a leaf or already combined.
    if (typeof reducers === 'function') {
      return reducers
    }

    // If this is an object of functions, combine reducers.
    if (typeof reducers === 'object') {
      const combinedReducers = Object.entries(reducers).reduce(
        (obj, [key, value]) => ({
          ...obj,
          [key]: combineReducersRecurse(value),
        }),
        {}
      )
      return combine(combinedReducers)
    }

    // If we get here we have an invalid item in the reducer path.
    throw new Error(`Invalid item in reducer tree: ${JSON.stringify(reducers)}`)
  }

  const createInjectStore = (initialReducers, ...args) => {
    // If last item is an object, it is overrides.
    if (typeof args[args.length - 1] === 'object') {
      const overrides = args.pop()
      // Allow overriding the combineReducers function such as with redux-immutable.
      if (
        overrides.hasOwnProperty('combineReducers') &&
        typeof overrides.combineReducers === 'function'
      ) {
        combine = overrides.combineReducers
      }
    }

    store = createStore(combineReducersRecurse(initialReducers), ...args)

    injectedReducers = initialReducers

    return store
  }

  const injectReducer = (key, reducer, force = __SERVER__) => {
    // If already set, do nothing.
    if (has(injectedReducers, key) && !force) {
      return
    }

    if (store) {
      set(injectedReducers, key, reducer)
      store.replaceReducer(combineReducersRecurse(injectedReducers))
    }
  }

  const getStore = () => store

  return {
    createInjectStore,
    injectReducer,
    getStore,
  }
}
