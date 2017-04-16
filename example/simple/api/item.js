
const data = {}

export function getItemInfo(id) {
  const num = Math.random().toString().slice(2, 6)

  return Promise.resolve({
    desc: data[id] || `desc - ${num}`,
    id
  })
}

export function updateItemInfo(id, {desc}) {
  data[id] = desc
  return Promise.resolve()
}
