
export function getItemInfo(id) {
  return Promise.resolve({
    desc: `some more ... ${Math.random()}`,
    id
  })
}

export function updateItemInfo(id, data) {
  return Promise.resolve()
}
