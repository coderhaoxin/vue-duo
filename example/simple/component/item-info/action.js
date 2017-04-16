
import { createAction } from 'vue-duo'

import {
  updateItemInfo,
  getItemInfo
} from '../../api/item'

export const update = createAction(async (id, up) => {
  await updateItemInfo(id, up)
  return up
})

export const getInfo = createAction(async (id) => {
  const info = await getItemInfo(id)
  return info
})
