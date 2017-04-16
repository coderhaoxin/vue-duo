
import { createStore } from 'vue-duo'

import { switchItem } from './action'

const store = createStore({
  currentItemId: 0
})

store.subscribeActions({
  [switchItem]: (id) => ({
    currentItemId: id
  })
})

export default store
