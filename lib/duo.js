
import pick from 'lodash.pick'

function VueDuo(Vue) {
  function defineReactive(vm, key, val) {
    if (key in vm) {
      vm[key] = val
    } else {
      Vue.util.defineReactive(vm, key, val)
    }
  }

  Vue.mixin({
    created() {
      const vm = this
      const {
        pickStore,
        store
      } = vm.$options

      if (!store) return

      const keys = []

      vm._storeSubscription = store.subscribe(up => {
        if (pickStore) {
          up = pick(up, pickStore)
        }

        Object.keys(up).forEach(key => {
          if (!keys.includes(key)) {
            defineReactive(vm, key, undefined)
            keys.push(key)
          }

          vm[key] = up[key]
        })
      })
    },
    beforeDestroy() {
      if (this._storeSubscription) {
        this._storeSubscription.unsubscribe()
      }
    }
  })
}

export default VueDuo
