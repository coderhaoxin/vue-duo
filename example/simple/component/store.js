
import { createStore } from 'duo'

import { switchItem } from './action'

const store = createStore({
  currentItemId: 0
})

switchItem.subscribe(id => {
  store.update({
    currentItemId: id
  })
})

export default store
