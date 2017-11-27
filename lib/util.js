
import uuid from 'uuid/v4'

export function throwError(message) {
  throw new Error(message)
}

export function uid() {
  return uuid().replace(/-/g, '')
}
