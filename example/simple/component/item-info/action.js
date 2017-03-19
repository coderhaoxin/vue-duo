
import { createAction } from 'duo'

import {
  updateItemInfo,
  getItemInfo
} from '../../api/item'

export const update = createAction(async function(id, up) {
  await updateItemInfo(id, up)
  return up
})

export const getInfo = createAction(async function(id) {
  const info = await getItemInfo(id)
  return info
})
