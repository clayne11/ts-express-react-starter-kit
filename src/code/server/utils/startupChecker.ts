import {teardown} from './startup'
import {startupSubject} from './startupSubject'
import {unsubscribeFrom} from 'code/universal/utils/unsubscribeFrom'

const MAX_STARTUP_SECONDS = 60
const MAX_STARTUP_TIME = MAX_STARTUP_SECONDS * 1000

let startupHandler
let unsubscribeStartup

const startupPromise = new Promise(resolve => {
  startupHandler = setTimeout(() => {
    resolve(false)
  }, MAX_STARTUP_TIME)
  unsubscribeStartup = startupSubject.subscribe(() => {
    clearTimeout(startupHandler)
    resolve(true)
  })
})

export const startupChecker = async () => {
  const started = await startupPromise
  if (!started) {
    throw new Error(`Server failed to start in ${MAX_STARTUP_SECONDS} seconds`)
  }
}

teardown(() => {
  clearTimeout(startupHandler)
  unsubscribeFrom(unsubscribeStartup)
})
