import {Unsubscribable} from '../../typings/Unsubscribable'
import {unsubscribeFrom} from '../../universal/utils/unsubscribeFrom'

interface StartupFunc {
  (): Unsubscribable | void | Promise<Unsubscribable | void>
}

let fnsToStartup = [] as Array<StartupFunc>
let unsubscribablesToTeardown = [] as Array<Unsubscribable>

let isStarted = false

export const startup = async (func: StartupFunc) => {
  if (isStarted) {
    const unsubscribableToTeardown = await func()
    if (unsubscribableToTeardown) {
      unsubscribablesToTeardown.push(unsubscribableToTeardown)
    }
    return
  }
  fnsToStartup.push(func)
}

export const runStartup = async () => {
  isStarted = true

  await Promise.all(fnsToStartup.map(startup))
}

export const teardown = unsubscribable => {
  if (unsubscribable) {
    unsubscribablesToTeardown.push(unsubscribable)
  }
}

export const runTeardown = async () => {
  await Promise.all(unsubscribablesToTeardown.map(unsubscribeFrom))
  fnsToStartup = []
  unsubscribablesToTeardown = []

  isStarted = false
}
