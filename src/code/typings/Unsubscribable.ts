export interface Unsubscribe {
  (): void
}

export interface AnonymousSubscription {
  unsubscribe: Unsubscribe
}

export type Unsubscribable = Unsubscribe | AnonymousSubscription
