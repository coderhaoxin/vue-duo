
import { Subject } from 'rxjs/Subject'
import uuid from 'uuid/v4'

const defaultAction = data => data

export const actions = new Map()

export function createAction(fn = defaultAction) {
  const subject = new Subject()

  const fun = function(...args) {
    return Promise.resolve(fn(...args))
      .then(data => {
        subject.next(data)
        return data
      })
  }

  fun.subscribe = (...args) => {
    subject.subscribe(...args)
  }

  const name = uuid() + fn.name

  fun.toString = () => name

  actions.set(name, fun)

  return fun
}
