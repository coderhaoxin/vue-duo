
import { createStore } from 'vue-duo'

import { add } from './action'

const store = createStore({
  count: 0,
  msg: ''
})

store.subscribeActions({
  [add]: () => ({
    count: store.get('count') + 1
  })
})

export default store
