
import { Observable } from 'rxjs/Observable'
import { createAction } from 'vue-duo'

require('rxjs/add/observable/fromPromise')
require('rxjs/add/observable/interval')

require('rxjs/add/operator/switchMap')
require('rxjs/add/operator/startWith')
require('rxjs/add/operator/scan')

export const add = createAction()

export const request$ = Observable.interval(500)
  .startWith(0)
  .scan((_, n) => n + 1)
  .switchMap(n => Observable.fromPromise(request(n)))

// mock

function request(num) {
  return new Promise(resolve => {
    const ms = Math.random() * 1000 | 0
    console.log('num:', num, 'ms:', ms)
    setTimeout(() => {
      console.log('finished:', num)
      resolve(num)
    }, ms)
  })
}
