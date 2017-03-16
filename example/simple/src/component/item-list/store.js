
import { createStore } from 'duo'

import { add, del } from './action'

const store = createStore({
  items: []
})

store.subscribeActions({
  [add]: item => ({
    items: [...store.state.items, {
      ...item,
      id: store.state.items.length + 1
    }]
  }),

  [del]: id => ({
    items: [...store.state.items.filter(i => i.id !== id)]
  })
})

export default store
