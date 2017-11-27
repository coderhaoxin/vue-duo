
import { createStore } from 'vue-duo'

import {
  request$,
  add
} from './action'

const store = createStore({
  count: 0,
  msg: ''
})

store.subscribeObservable(request$, num => ({
  count: num
}))

store.subscribeActions({
  [add]: () => ({
    count: store.get('count') + 1
  })
})

export default store
