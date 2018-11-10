import {Unsubscribable} from 'code/typings/Unsubscribable'

export const unsubscribeFrom = async (subscription: Unsubscribable) => {
  if (typeof subscription === 'function') {
    subscription()
    return
  }

  await subscription.unsubscribe()
}
