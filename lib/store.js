
import { ReplaySubject } from 'rxjs/ReplaySubject'
import update from 'immutability-helper'
import clone from 'clone'

import { throwError } from './util'
import { actions } from './action'

function noop() {}

class Subject extends ReplaySubject {
  constructor(...args) {
    super(...args)
    this._state = {}
  }

  get state() {
    return clone(this._state)
  }

  update(data = {}) {
    if (typeof data !== 'object') {
      throwError('invalid updated data')
    }

    this._state = update(this.state, {
      $merge: data
    })

    this.next(this.state)
  }

  subscribeEvent(event, reducer = noop, handler = noop) {
    if (typeof handler !== 'function') {
      // TODO: more info
      throwError('invalid event handler')
    }

    if (typeof reducer !== 'function') {
      // TODO
      throwError('invalid reducer')
    }

    event.subscribe(data => {
      Promise.resolve(reducer(data))
        .then(result => {
          this.update(result)
          return result
        })
        .then(result => handler(data, result))
        .then(result => this.update(result))
    })
  }

  subscribeActions(mapping) {
    Object.keys(mapping).forEach(k => {
      const action = actions.get(k)
      const reducer = mapping[k]

      if (typeof action !== 'function') {
        // TODO: more info
        throwError('unknown action')
      }

      if (typeof reducer !== 'function') {
        // TODO
        throwError('invalid reducer')
      }

      action.subscribe(data => {
        Promise.resolve(reducer(data))
          .then(result => this.update(result))
      })
    })
  }
}

export function createStore(defaultState) {
  const subject = new Subject(1)
  subject.update(defaultState)
  return subject
}
